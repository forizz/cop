import type { Category, Quiz } from "~/shared/types";

export const categories: Category[] = [
  {
    title: "Geography",
    link: "#/geography",
    image: {
      href: "public/geography.jpeg",
      alt: "Geography",
    },
  },
  {
    title: "History",
    link: "#/history",
    image: {
      href: "public/history.png",
      alt: "History",
    },
  },
  {
    title: "Sport",
    link: "#/sport",
    image: {
      href: "public/sport.png",
      alt: "Sport",
    },
  },
];

export const quizes: Quiz[] = [
  {
    id: 1,
    title: "F1 Champions",
    answers: ["Lewis Hamilton", "Esteban Ocon"],
  },
  {
    id: 2,
    title: "F1 Legends",
    answers: ["Sebastian Vettel", "Ayrton Senna"],
  },
];

export const quizList = quizes.map((quiz) => ({
  title: quiz.title,
  link: "#/" + quiz.title.toLowerCase().replace(/ /g, "-") + "-quiz",
}));
