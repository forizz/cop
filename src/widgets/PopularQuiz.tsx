import React from "react";
import { quizList } from "~/shared/data";
import { Link } from "react-router";

function PopularQuiz() {
  return (
    <div className="border-primary flex w-full flex-col rounded-2xl border border-2 text-center">
      <h2 className="bg-primary text-background rounded-t-xl p-4 text-xl font-semibold">
        Popular Quizes
      </h2>
      <hr className="border-primary" />
      {quizList.map((item, i) => (
        <>
          <Link
            to={item.link}
            className="p-4 text-center"
          >
            {item.title}
          </Link>
          {i !== quizList.length - 1 && <hr className="border-primary" />}
        </>
      ))}
    </div>
  );
}

export { PopularQuiz };
