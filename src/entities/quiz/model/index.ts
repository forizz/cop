export type Question = {
  id: number;
  text: string;
  answers: {
    text: string;
    id: number;
  }[];
  correctAnswer: number;
};

export type Quiz = {
  id: number;
  title: string;
  category: string;
  difficulty: {
    [key in Difficulty]?: Question[];
  };
};

export const availableDifficulties = ["easy", "medium", "hard"] as const;

export type Difficulty = (typeof availableDifficulties)[number];

export * from "./store";
export * from "./store-types";
