import React, { useState } from "react";

import { Search } from "lucide-react";
import { Link } from "react-router";

import type { NavQuizItem } from "~/entities";

interface QuizSearchProps {
  quizzes: NavQuizItem[];
}

function QuizSearch({ quizzes }: QuizSearchProps) {
  const [search, setSearch] = useState("");
  
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="relative">
      <Search className="absolute inset-2 left-2 stroke-zinc-500" />
      <input
        type="search"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="rounded-2xl border border-zinc-700 px-4 py-2 pl-10"
      />

      {search !== "" && (
        <div className="absolute top-[110%] w-full rounded-2xl bg-white p-2 shadow">
          <ul className="flex flex-col space-y-2">
            {filteredQuizzes.length > 0 &&
              filteredQuizzes.map((quiz) => (
                <li
                  key={quiz.id}
                  className="flex"
                >
                  <Link
                    to={`/quizzes/${quiz.id}`}
                    className="hover:bg-primary/30 inline-flex flex-1 rounded-xl px-4 py-1"
                  >
                    {quiz.title}
                  </Link>
                </li>
              ))}
            {filteredQuizzes.length <= 0 && (
              <p className="text-center text-zinc-500">Not found</p>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export { QuizSearch };
