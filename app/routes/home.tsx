import type { Route } from "./+types/home";
import Header from "~/components/Header";
import type { Category } from "~/types";
import CategoryGrid from "~/components/CategoryGrid";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const categories: Category[] = [
  {
    title: "Geography",
    link: "#/geography",
  },
  {
    title: "History",
    link: "#/history",
  },
  {
    title: "Sport",
    link: "#/sport",
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 p-8">
        <h1>Quiz Categories</h1>
        <CategoryGrid categories={categories} />
      </main>
      <Footer />
    </div>
  );
}
