import type { NavQuizItem, Quiz } from "~/entities";

function quizToNavQuizItem(quiz: Quiz): NavQuizItem {
  return {
    id: quiz.id,
    title: quiz.title,
    link: `/quizzes/${quiz.id}`,
  };
}

function secondsToTime(seconds: number): string {
  return new Date(seconds * 1000).toISOString().substring(11, 19);
}

export { quizToNavQuizItem, secondsToTime };
