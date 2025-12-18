import type { NavQuizItem, Quiz } from "~/entities";

function quizToNavQuizItem(quiz: Quiz): NavQuizItem {
  return {
    id: quiz.id,
    title: quiz.title,
    link: `/quizzes/${quiz.id}`,
  };
}

export { quizToNavQuizItem };
