import React from "react";
import { AppLayout } from "~/widgets";
import { Link } from "react-router";
import { Check, ChevronRight } from "lucide-react";
import { quizes } from "~/shared/data";

const currentQuiz = quizes[0];
const currentQuestion = currentQuiz.questions[0];

export default function QuizPage() {
  const breadcrumbs = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/categories",
      label: "Categories",
    },
    {
      link: `/quiz/${currentQuiz.id}`,
      label: currentQuiz.title,
    },
  ];

  return (
    <AppLayout>
      <div className="p-8">
        <ol className="mb-4 flex">
          {breadcrumbs.map((crumb, index) => (
            <li
              key={crumb.link}
              className="flex items-center"
            >
              <Link
                to={crumb.link}
                className="text-blue-500 hover:underline"
              >
                {crumb.label}
              </Link>
              {index !== breadcrumbs.length - 1 && (
                <ChevronRight className="mx-2" />
              )}
            </li>
          ))}
        </ol>
        <h1 className="mb-4 text-3xl font-bold">{currentQuiz.title}</h1>
        <div className="mb-4">
          <p className="text-sm text-gray-600">
            Question 1 of {currentQuiz.questions.length}
          </p>
        </div>
        <div className="mb-6">
          <h2 className="mb-4 text-xl">{currentQuestion.text}</h2>
          <div className="space-y-2">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                type="button"
                className="w-full rounded border border-gray-300 p-4 text-left hover:bg-gray-50"
              >
                <span className="mr-2 font-semibold">
                  {String.fromCharCode(65 + index)}.
                </span>
                {answer}
              </button>
            ))}
          </div>
        </div>
        <button
          type="button"
          className="rounded bg-blue-500 px-6 py-2 text-white"
        >
          Next Question
        </button>
      </div>
    </AppLayout>
  );
}
