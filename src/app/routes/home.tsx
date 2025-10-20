import HomePage from "~/pages/home";

import type { Route } from "./+types/home";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function meta(_: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function HomeRoute() {
  return <HomePage />;
}
