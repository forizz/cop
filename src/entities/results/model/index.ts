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
  score: {
    result: number;
    total: number;
  };
  time: number;
  date: string;
};
