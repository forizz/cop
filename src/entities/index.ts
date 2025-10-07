export type Image = {
  href: string;
  alt: string;
};

export type Category = {
  title: string;
  link: string;
  image: Image;
};

export type Question = {
  text: string;
  answers: string[]; // 4 answers
  correctAnswer: number; // index of correct answer (0-3)
};

export type Quiz = {
  id: number;
  title: string;
  category: string; // category title
  questions: Question[];
};
