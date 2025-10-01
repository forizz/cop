import React from "react";
import { AppLayout, CategoryGrid, PopularQuiz } from "~/widgets";
import { categories } from "~/shared/data";

export default function HomePage() {
  return (
    <AppLayout>
      <main className="flex flex-1 flex-col gap-2 p-8">
        <h1>Quiz Categories</h1>

        <div className="flex flex-1 gap-8 px-24">
          <CategoryGrid categories={categories} />
          <PopularQuiz />
        </div>
      </main>
    </AppLayout>
  );
}
