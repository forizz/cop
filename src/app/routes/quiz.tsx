import type { Route } from "./+types/home";
import QuizPage from "~/pages/quiz";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function QuizRoute() {
  return <QuizPage />;
}
