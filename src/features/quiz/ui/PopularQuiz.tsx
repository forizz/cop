import React from "react";

import { Link } from "react-router";

import { quizList } from "~/shared/data";

function PopularQuiz() {
  return (
    <div className="border-primary flex flex-col rounded-2xl border border-2 text-center">
      <h2 className="bg-primary text-background rounded-t-xl p-4 text-xl font-semibold">
        Popular Quizes
      </h2>
      {quizList.map((item) => (
        <Link
          key={item.link}
          to={item.link}
          className="hover:bg-primary/30 p-4 text-center"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export { PopularQuiz };
