import type { Route } from "./+types/home";
import CategoryGrid from "~/components/CategoryGrid";
import AppLayout from "~/components/AppLayout";
import { categories, quizList } from "~/data";
import { Link } from "react-router";
import PopularQuiz from "~/components/PopularQuiz";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
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
