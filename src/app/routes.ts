import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("./layout.tsx", [
    index("routes/home.tsx"),
    route("quizzes/:id", "routes/quiz.tsx"),
    route("results", "routes/results.tsx"),
  ]),
] satisfies RouteConfig;
