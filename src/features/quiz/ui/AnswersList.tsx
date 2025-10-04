import React from "react";
import type { Question } from "~/entities";

type AnswersListProps = {
  answers: Question["answers"];
};

function AnswersList({ answers }: Readonly<AnswersListProps>) {
  return (
    <div className="space-y-2">
      {answers.map((answer, index) => (
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
  );
}

export { AnswersList };
