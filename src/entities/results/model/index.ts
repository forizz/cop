import type { Difficulty } from "~/entities";

export type GlobalResults = {
  overallTime: string;
  bestTime: string;
  gamesCount: {
    total: number;
    won: number;
    noMistakes: number;
  };
  averageCorrect: number;
  totalQuestions: number;
  correctAnswers: number;
};

export type ResultStatGame = {
  id: number;
  title: string;
  category: string;
  difficulty: Difficulty;
  score: {
    result: number;
    total: number;
  };
  time: number;
  date: string;
};

export * from "./store";
export * from "./store-types";
export * from "./results";
