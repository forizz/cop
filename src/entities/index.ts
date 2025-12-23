export type Image = {
  href: string;
  alt: string;
};

export type Category = {
  title: string;
  link: string;
  image: Image;
};

export type NavQuizItem = {
  id: number;
  title: string;
  link: string;
};

export * from "./quiz";
export * from "./results";
