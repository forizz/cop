import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("quizzes/:id", "routes/quiz.tsx"),
  route("results", "routes/results.tsx"),
] satisfies RouteConfig;
