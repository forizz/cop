import type { Route } from "./+types/quiz";
import ResultsPage from "~/pages/results";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function ResultsRoute() {
  return <ResultsPage />;
}
