export type ResultStatGame = {
  id: number;
  title: string;
  category: string;
  score: {
    result: number;
    total: number;
  };
  time: string;
  date: string;
};
