import QuizPage from "~/pages/quiz";

import type { Route } from "./+types/quiz";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export async function loader({ params }: Route.LoaderArgs) {
  return { id: +params.id };
}

export default function QuizRoute({ loaderData }: Route.ComponentProps) {
  return <QuizPage id={loaderData.id} />;
}
