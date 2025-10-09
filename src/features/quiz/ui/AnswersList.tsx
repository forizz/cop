import React from "react";

import clsx from "clsx";

import type { Question } from "~/entities";

type AnswersListProps = {
  answers: Question["answers"];
  selectedAnswerId: number;
  onSelect: (answerId: number) => void;
  isSubmitted?: boolean;
  correctAnswerId?: number;
};

function AnswersList({
  answers,
  selectedAnswerId,
  onSelect,
  isSubmitted = false,
  correctAnswerId,
}: Readonly<AnswersListProps>) {
  return (
    <div className="space-y-2">
      {answers.map((answer, index) => {
        const isSelected = answer.id === selectedAnswerId;
        const isCorrect = answer.id === correctAnswerId;
        const isWrongSelection = isSubmitted && isSelected && !isCorrect;

        return (
          <button
            key={answer.id}
            type="button"
            className={clsx(
              "w-full rounded border-2 p-4 text-left transition-colors",
              {
                // Not submitted - normal styling
                "bg-accent-background border-gray-300 hover:bg-gray-50":
                  !isSubmitted,
                "border-primary": !isSubmitted && isSelected,

                // Submitted - feedback styling
                "border-green-500 bg-green-100 text-green-800":
                  isSubmitted &&
                  ((isSelected && isCorrect) || (!isSelected && isCorrect)),
                "border-red-500 bg-red-100 text-red-800":
                  isSubmitted && isWrongSelection,
                "border-gray-300 bg-gray-50":
                  isSubmitted && !isSelected && !isCorrect,
              },
            )}
            onClick={() => !isSubmitted && onSelect(answer.id)}
            disabled={isSubmitted}
          >
            <span className="mr-2 font-semibold">
              {String.fromCharCode(65 + index)}.
            </span>
            {answer.text}
          </button>
        );
      })}
    </div>
  );
}

export { AnswersList };
