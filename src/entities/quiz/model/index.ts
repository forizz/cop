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

export type Difficulty = "easy" | "medium" | "hard";

export * from "./store";
export * from "./store-types";
