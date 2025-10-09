import type { LatestGameType } from "~/features/results";
import { quizzes } from "~/shared/data";

export const latestGames: LatestGameType[] = [
  {
    id: 1,
    title: quizzes[0].title,
    category: quizzes[0].category,
    score: "8/10",
    time: "02:15",
    date: "Today",
  },
  {
    id: 2,
    title: quizzes[1].title,
    category: quizzes[1].category,
    score: "9/10",
    time: "01:45",
    date: "Yesterday",
  },
  {
    id: 3,
    title: quizzes[2].title,
    category: quizzes[2].category,
    score: "7/10",
    time: "03:20",
    date: "2 days ago",
  },
];
