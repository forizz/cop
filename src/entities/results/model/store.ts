import { create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

import type { ResultsState, ResultsStore } from "~/entities";

const defaultInitState: ResultsState = {
  context: {
    totalTimePlayed: 0,
    gamesWon: 0,
    accuracy: -1,
    gamesPlayed: 0,
    perfectGames: 0,
    bestTime: -1,
    averageCorrect: 0,
    recentGames: [],
    questions: {
      total: 0,
      completed: 0,
    },
  },
};

const useResults = create<
  ResultsStore,
  [["zustand/persist", ResultsState], ["zustand/immer", never]]
>(
  persist(
    immer((set, get) => ({
      ...defaultInitState,

      actions: {
        registerGame: (payload) =>
          set(({ context }) => {
            context.gamesPlayed += 1;
            context.totalTimePlayed += payload.time;

            const accuracy = payload.score.result / payload.score.total;

            if (context.accuracy === -1) {
              context.accuracy = accuracy * 100;
            } else {
              context.accuracy = (context.accuracy + accuracy * 100) / 2;
            }

            context.perfectGames += accuracy === 1 ? 1 : 0;
            if (payload.time < context.bestTime || context.bestTime === -1) {
              context.bestTime = payload.time;
            }

            if (accuracy > 0.5) {
              context.gamesWon += 1;
            }

            context.recentGames.push({
              ...payload,
            });

            const { sumCorrect, sumTotal } = context.recentGames.reduce(
              (acc, game) => {
                acc.sumCorrect += game.score.result;
                acc.sumTotal += game.score.total;
                return acc;
              },
              { sumCorrect: 0, sumTotal: 0 },
            );

            context.averageCorrect = calculateAverageScore(
              sumCorrect,
              sumTotal,
            );

            context.questions.total += payload.questions.total;
            context.questions.completed += payload.questions.completed;
          }),

        getLatestGames: () => get().context.recentGames.slice(-3).reverse(),

        getBestGames: () =>
          get()
            .context.recentGames.slice()
            .sort(
              (a, b) =>
                calculateAverageScore(b.score.result, b.score.total) -
                calculateAverageScore(a.score.result, a.score.total),
            )
            .slice(-3),

        resetResults: () => set(defaultInitState),
      },
    })),
    {
      name: "results-store",
      partialize: (state) => ({ context: state.context }),
    },
  ),
);

const MAX_SCORE = 10;

function calculateAverageScore(
  correct: number,
  total: number,
  maxScore: number = MAX_SCORE,
) {
  if (total === 0) return 0;

  const rawScore = (correct / total) * maxScore;

  return Math.round(rawScore * 10) / 10;
}

export { useResults, calculateAverageScore, MAX_SCORE };
