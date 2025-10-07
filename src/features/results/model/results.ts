import type { LatestGameType } from "~/features/results";
import { quizes } from "~/shared/data";

export const latestGames: LatestGameType[] = [
  {
    id: 1,
    title: quizes[0].title,
    category: quizes[0].category,
    score: "8/10",
    time: "02:15",
    date: "Today",
  },
  {
    id: 2,
    title: quizes[1].title,
    category: quizes[1].category,
    score: "9/10",
    time: "01:45",
    date: "Yesterday",
  },
  {
    id: 3,
    title: quizes[2].title,
    category: quizes[2].category,
    score: "7/10",
    time: "03:20",
    date: "2 days ago",
  },
];
