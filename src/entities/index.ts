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
  id: number;
  text: string;
  answers: {
    text: string;
    id: number;
  }[]; // 4 answers
  correctAnswer: number;
};

export type Quiz = {
  id: number;
  title: string;
  category: string; // category title
  questions: Question[];
};
