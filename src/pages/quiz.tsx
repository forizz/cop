import React from "react";
import { AppLayout } from "~/widgets";
import { Link } from "react-router";
import { Check, ChevronRight } from "lucide-react";
import { quizes } from "~/shared/data";

const currentQuiz = quizes[1];

const breadcrumbs = [
  {
    link: "#/",
    label: "Home",
  },
  {
    link: "#/1",
    label: "Quiz list",
  },
  {
    link: "#/2",
    label: currentQuiz.title,
  },
];

export default function QuizPage() {
  return (
    <AppLayout>
      <div>
        <ol className="flex p-4">
          {breadcrumbs.map((crumb, index) => (
            <li
              key={crumb.link}
              className="flex"
            >
              <Link to={crumb.link}>{crumb.label}</Link>
              {index !== breadcrumbs.length - 1 && <ChevronRight />}
            </li>
          ))}
        </ol>
        <h1 className="sr-only">{currentQuiz.title}</h1>
        <h2> TITLE </h2>
        <div>
          <ol>
            <li>
              <button type="button">
                <span>A</span>
                <p></p>
                <Check />
              </button>
            </li>
          </ol>
          <button type="button">Submit</button>
        </div>
        <div>{/*Timer Animation*/}</div>
      </div>
    </AppLayout>
  );
}
