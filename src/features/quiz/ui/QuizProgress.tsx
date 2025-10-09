import React, { useState } from "react";

import clsx from "clsx";
import { ChevronUp } from "lucide-react";
import { Link } from "react-router";

import type { Question } from "~/entities";
import { CheckMark } from "~/widgets";

type QuizProgressProps = {
  questions: Question[];
};

function QuizProgress({ questions }: Readonly<QuizProgressProps>) {
  const [open, setOpen] = useState(true);

  const progress = questions.map((_question, index) => {
    return index % 2 === 0;
  });

  function handleOpen() {
    setOpen((prev) => !prev);
  }

  return (
    <section className="bg-accent-background flex h-fit flex-col space-y-2 rounded-md shadow-md">
      <button
        type="button"
        className="inline-flex items-center justify-between gap-8 border-b border-zinc-400 p-2"
        onClick={handleOpen}
      >
        <h3 className="text-lg font-semibold">Quiz Question List</h3>
        <ChevronUp
          className={clsx(
            !open && "rotate-180",
            "stroke-primary transition-transform",
          )}
        />
      </button>
      {open && (
        <ol className="flex flex-col space-y-2 p-2">
          {questions.map((question, index) => (
            <li
              key={question.id}
              className="flex"
            >
              <Link
                to="#"
                className={clsx(
                  "bg-muted-background flex flex-1 items-center justify-between rounded-md p-2 text-sm",
                  progress[index] ? "text-primary bg-primary/10" : "opacity-30",
                )}
              >
                <span>Quiz Question {index + 1}</span>

                {progress[index] && <CheckMark />}
              </Link>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}

export { QuizProgress };
