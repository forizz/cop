import type { ResultStatGame } from "~/entities/results";

type State = {
  context: {
    totalTimePlayed: number;
    gamesWon: number;
    accuracy: number;
    gamesPlayed: number;
    perfectGames: number;
    bestTime: number;
    averageCorrect: number;
    recentGames: ResultStatGame[];
    questions: {
      total: number;
      completed: number;
    };
  };
};

type RegisterGamePayload = {
  questions: {
    total: number;
    completed: number;
  };
} & ResultStatGame;

type Actions = {
  actions: {
    registerGame: (payload: RegisterGamePayload) => void;
    getBestGames: () => ResultStatGame[];
    getLatestGames: () => ResultStatGame[];
    resetResults: () => void;
  };
};

type Store = State & Actions;

export type {
  Store as ResultsStore,
  Actions as ResultsActions,
  State as ResultsState,
};
