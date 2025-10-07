import ResultsPage from "~/pages/results";

import type { Route } from "./+types/quiz";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Quiz Results - Trivia Quiz" },
    {
      name: "description",
      content: "View your quiz performance and statistics",
    },
  ];
}

export default function ResultsRoute() {
  return <ResultsPage />;
}
