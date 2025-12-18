import React, { useMemo } from "react";

import type { NavQuizItem } from "~/entities";
import { CategoryGrid } from "~/features/categories/ui";
import { PopularQuiz } from "~/features/quiz";
import { categories, quizzes } from "~/shared/data";
import { QuizSearch } from "~/widgets";

export default function HomePage() {
  const navQuizzesList = useMemo<NavQuizItem[]>(
    () =>
      quizzes.map((quiz) => {
        return {
          id: quiz.id,
          title: quiz.title,
          link: `/quizzes/${quiz.id}`,
        };
      }),
    [],
  );

  return (
    <main className="flex flex-1 flex-col">
      <section className="bg-gradient-to-br from-emerald-50 to-emerald-100 px-8 py-16 text-center dark:from-emerald-950 dark:to-emerald-900">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold text-emerald-900 md:text-6xl dark:text-emerald-100">
            Welcome to Trivia Quiz
          </h1>
          <p className="mb-8 text-lg text-emerald-700 md:text-xl dark:text-emerald-300">
            Test your knowledge across various categories and challenge yourself
            with our exciting quizzes!
          </p>
          <div className="flex justify-center">
            <QuizSearch quizzes={navQuizzesList} />
          </div>
        </div>
      </section>

      <section className="px-8 py-12">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-foreground mb-8 text-center text-3xl font-semibold">
            Quiz Categories
          </h2>
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
            <div className="flex-1">
              <CategoryGrid categories={categories} />
            </div>
            <div className="lg:w-80">
              <PopularQuiz quizzes={navQuizzesList} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
