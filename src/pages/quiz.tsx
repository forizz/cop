import React, { useCallback, useState } from "react";

import { AnswersList, QuizProgress } from "~/features/quiz/ui";
import { quizes } from "~/shared/data";
import { AppLayout, Breadcrumbs, ProgressTimer } from "~/widgets";

const currentQuiz = quizes[0];
const TOTAL_TIME = 60;
const CIRCUMFERENCE = 2 * Math.PI * 60;

const defaultAnswer = -1;

export default function QuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(defaultAnswer);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = currentQuiz.questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const correctAnswerId =
    currentQuestion.answers[currentQuestion.correctAnswer].id;

  const onSubmit = useCallback(() => {
    if (selectedAnswerId === -1) return;

    setIsSubmitted(true);
  }, [selectedAnswerId]);

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswerId(defaultAnswer);
      setIsSubmitted(false);
    } else {
      // Quiz completed - navigate to results
      alert("Quiz completed!");
    }
  }, [currentQuestionIndex]);

  return (
    <AppLayout>
      <main className="flex flex-1 justify-center py-12">
        <div className="p-8">
          <Breadcrumbs />

          <h1 className="mb-4 text-3xl font-bold">{currentQuiz.title}</h1>
          <div className="mb-4">
            <p className="text-sm text-gray-600">
              Question {questionNumber} of {currentQuiz.questions.length}
            </p>
          </div>
          <div className="mb-6">
            <h2 className="mb-4 text-xl">{currentQuestion!.text}</h2>
            <AnswersList
              answers={currentQuestion!.answers}
              selectedAnswerId={selectedAnswerId}
              onSelect={setSelectedAnswerId}
              isSubmitted={isSubmitted}
              correctAnswerId={correctAnswerId}
            />
          </div>
          {isSubmitted ? (
            <button
              type="button"
              className="bg-primary rounded px-6 py-2 text-white"
              onClick={nextQuestion}
            >
              Next Question
            </button>
          ) : (
            <button
              type="button"
              className="bg-primary rounded px-6 py-2 text-white"
              onClick={onSubmit}
            >
              Submit
            </button>
          )}
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
