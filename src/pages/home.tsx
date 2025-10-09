import React from "react";

import { CategoryGrid } from "~/features/categories/ui";
import { PopularQuiz } from "~/features/quiz";
import { categories } from "~/shared/data";
import { AppLayout } from "~/widgets";

export default function HomePage() {
  return (
    <AppLayout>
      <main className="flex flex-1 flex-col gap-2 p-8">
        <h1>Quiz Categories</h1>

        <div className="flex flex-1 justify-center gap-8 px-24">
          <CategoryGrid categories={categories} />
          <PopularQuiz />
        </div>
      </main>
    </AppLayout>
  );
}
