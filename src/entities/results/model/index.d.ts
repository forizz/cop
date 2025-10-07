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
