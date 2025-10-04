import React from "react";
import { AppLayout, Breadcrumbs, ProgressTimer } from "~/widgets";
import { quizes } from "~/shared/data";
import { AnswersList, QuizProgress } from "~/features/quiz/ui";

const currentQuiz = quizes[0];
const currentQuestion = currentQuiz.questions[0];
const TOTAL_TIME = 10;
const CIRCUMFERENCE = 2 * Math.PI * 60;

export default function QuizPage() {
  return (
    <AppLayout>
      <main className="flex flex-1 justify-center py-12">
        <div className="p-8">
          <Breadcrumbs />

          <h1 className="mb-4 text-3xl font-bold">{currentQuiz.title}</h1>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Question 1 of {currentQuiz.questions.length}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 text-xl">{currentQuestion.text}</h2>
            <AnswersList answers={currentQuestion.answers} />
          </div>
          <button
            type="button"
            className="rounded bg-blue-500 px-6 py-2 text-white"
          >
            Next Question
          </button>
        </div>
        <div className="flex flex-col gap-6">
          <ProgressTimer
            circumference={CIRCUMFERENCE}
            totalTime={TOTAL_TIME}
            onComplete={() => {
              alert("Time Ended");
            }}
          />
          <QuizProgress questions={currentQuiz.questions} />
        </div>
      </main>
    </AppLayout>
  );
}
