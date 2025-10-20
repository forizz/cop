import type { ResultStatGame } from "~/features/results";
import { quizzes } from "~/shared/data";

const playedGames: ResultStatGame[] = [
  {
    id: 1,
    title: quizzes[0].title,
    category: quizzes[0].category,
    score: {
      result: 8,
      total: 10,
    },
    time: "02:15",
    date: "Today",
  },
  {
    id: 2,
    title: quizzes[1].title,
    category: quizzes[1].category,
    score: {
      result: 9,
      total: 10,
    },
    time: "01:45",
    date: "Yesterday",
  },
  {
    id: 3,
    title: quizzes[2].title,
    category: quizzes[2].category,
    score: {
      result: 7,
      total: 10,
    },
    time: "03:20",
    date: "2 days ago",
  },
];

export const latestGames: ResultStatGame[] = playedGames;

export const bestGames: ResultStatGame[] = playedGames
  .slice()
  .sort((a, b) => b.score.result - a.score.result);
