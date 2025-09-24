import type { Route } from "./+types/home";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

const categories = [
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
    <>
      <header>
        <Link to="/">IPZ Quiz</Link>
        <form>
          <input
            type="search"
            placeholder="Search"
          />
        </form>
      </header>
      <main>
        <h1>Quiz Categories</h1>
        <div className="grid">
          {categories.map((category) => (
            <Link
              to={category.link}
              key={category.link}
            >
              <h2>{category.title}</h2>
            </Link>
          ))}
        </div>
      </main>
      <footer></footer>
    </>
  );
}
