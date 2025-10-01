export type Image = {
  href: string;
  alt: string;
};

export type Category = {
  title: string;
  link: string;
  image: Image;
};

export type Quiz = {
  id: number;
  title: string;
  answers: string[];
};
