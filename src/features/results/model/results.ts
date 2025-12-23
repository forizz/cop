import type { ResultStatGame } from "~/entities";
import { quizzes } from "~/shared/data";

const playedGames: ResultStatGame[] = [
  {
    id: 1,
    title: quizzes[0].title,
    category: quizzes[0].category,
    difficulty: "easy",
    score: {
      result: 8,
      total: 10,
    },
    time: 135, // 2:15 in seconds
    date: "Today",
  },
  {
    id: 2,
    title: quizzes[1].title,
    category: quizzes[1].category,
    difficulty: "medium",
    score: {
      result: 9,
      total: 10,
    },
    time: 105, // 1:45 in seconds
    date: "Yesterday",
  },
  {
    id: 3,
    title: quizzes[2].title,
    category: quizzes[2].category,
    difficulty: "hard",
    score: {
      result: 7,
      total: 10,
    },
    time: 200, // 3:20 in seconds
    date: "2 days ago",
  },
];

export const latestGames: ResultStatGame[] = playedGames;

export const bestGames: ResultStatGame[] = playedGames
  .slice()
  .sort((a, b) => b.score.result - a.score.result);
