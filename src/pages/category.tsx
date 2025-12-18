import React, { useMemo } from "react";

import { Link, useParams } from "react-router";

import type { NavQuizItem } from "~/entities";
import { quizzes } from "~/shared/data";
import { quizToNavQuizItem } from "~/shared/utils";

export default function CategoryPage() {
  const { categoryName } = useParams<{ categoryName: string }>();

  const categoryQuizzes = useMemo<NavQuizItem[]>(() => {
    if (!categoryName) return [];

    return quizzes
      .filter(
        (quiz) => quiz.category.toLowerCase() === categoryName.toLowerCase(),
      )
      .map(quizToNavQuizItem);
  }, [categoryName]);

  const categoryTitle = categoryName
    ? categoryName.charAt(0).toUpperCase() + categoryName.slice(1)
    : "Unknown Category";

  return (
    <main className="flex flex-1 flex-col px-8 py-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Link
            to="/"
            className="text-primary mb-4 inline-flex items-center"
          >
            ← Back to Categories
          </Link>
          <h1 className="text-foreground text-3xl font-bold">
            {categoryTitle} Quizzes
          </h1>
          <p className="text-muted-foreground mt-2">
            Choose a quiz to test your knowledge in{" "}
            {categoryTitle.toLowerCase()}.
          </p>
        </div>

        {categoryQuizzes.length > 0 ? (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {categoryQuizzes.map((quiz) => (
              <Link
                key={quiz.id}
                to={quiz.link}
                className="group border-border bg-card rounded-lg border p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <h2 className="text-card-foreground group-hover:text-primary text-xl font-semibold">
                  {quiz.title}
                </h2>
                <p className="text-muted-foreground mt-2 text-sm">
                  Start this quiz →
                </p>
              </Link>
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p className="text-muted-foreground text-lg">
              No quizzes available for this category yet.
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
