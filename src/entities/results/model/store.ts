import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { State, Store } from "~/entities/results";

const defaultInitState: State = {
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
};

const useResults = create<Store, [["zustand/immer", never]]>(
  immer((set, get) => ({
    ...defaultInitState,

    actions: {
      registerGame: (payload) =>
        set((state) => {
          state.gamesPlayed += 1;
          state.totalTimePlayed += payload.time;

          const accuracy = payload.score.result / payload.score.total;

          if (state.accuracy === -1) {
            state.accuracy = accuracy * 100;
          } else {
            state.accuracy = (state.accuracy + accuracy * 100) / 2;
          }

          state.perfectGames += accuracy === 1 ? 1 : 0;
          if (payload.time < state.bestTime || state.bestTime === -1) {
            state.bestTime = payload.time;
          }

          if (accuracy > 0.5) {
            state.gamesWon += 1;
          }

          state.recentGames.push({
            ...payload,
          });

          const { sumCorrect, sumTotal } = state.recentGames.reduce(
            (acc, game) => {
              acc.sumCorrect += game.score.result;
              acc.sumTotal += game.score.total;
              return acc;
            },
            { sumCorrect: 0, sumTotal: 0 },
          );

          state.averageCorrect = calculateAverageScore(sumCorrect, sumTotal);

          state.questions.total += payload.questions.total;
          state.questions.completed += payload.questions.completed;
        }),

      getLatestGames: () => get().recentGames.slice(-3).reverse(),

      getBestGames: () =>
        get()
          .recentGames.slice()
          .sort(
            (a, b) =>
              calculateAverageScore(b.score.result, b.score.total) -
              calculateAverageScore(a.score.result, a.score.total),
          )
          .slice(-3),

      resetResults: () => set(defaultInitState),
    },
  })),
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
