import React, { useMemo } from "react";

import type { NavQuizItem } from "~/entities";
import { CategoryGrid } from "~/features/categories/ui";
import { PopularQuiz } from "~/features/quiz";
import { categories, quizzes } from "~/shared/data";
import { AppLayout } from "~/widgets";

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
    <AppLayout>
      <main className="flex flex-1 flex-col gap-2 p-8">
        <h1>Quiz Categories</h1>

        <div className="flex flex-1 justify-center gap-8 px-24">
          <CategoryGrid categories={categories} />
          <PopularQuiz quizzes={navQuizzesList} />
        </div>
      </main>
    </AppLayout>
  );
}
