import React, { useCallback, useState } from "react";

import { AnswersList, QuizProgress, useQuiz } from "~/features/quiz";
import { quizes } from "~/shared/data";
import { AppLayout, Breadcrumbs, ProgressTimer } from "~/widgets";

const currentQuiz = quizes[0];
const TOTAL_TIME = 60;
const CIRCUMFERENCE = 2 * Math.PI * 60;

export default function QuizPage() {
  const [startTime] = useState(() => Date.now());

  const {
    question: {
      data: currentQuestion,
      number: questionNumber,
      correctAnswerId,
    },
    answer: { selectedId: selectedAnswerId, isSubmitted },
    progress: {
      isCompleted,
      correctCount: correctAnswersCount,
      totalQuestions,
      completedQuestions,
    },
    actions: { selectAnswer, submitAnswer, nextQuestion },
  } = useQuiz(currentQuiz);

  const onSubmit = useCallback(() => {
    if (selectedAnswerId === -1) return;

    submitAnswer();
  }, [selectedAnswerId, submitAnswer]);

  if (isCompleted) {
    // eslint-disable-next-line react-hooks/purity
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const minutes = Math.floor(elapsedTime / 60);
    const seconds = elapsedTime % 60;
    const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    return (
      <AppLayout>
        <main className="flex flex-1 flex-col items-center justify-center py-12">
          <div className="space-y-8">
            <div className="text-center">
              <h1 className="mb-4 text-4xl font-bold text-green-600">
                Quiz Completed!
              </h1>
              <p className="mb-4 text-lg text-gray-600">
                Congratulations! You have finished the quiz.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-6 shadow-md">
              <p className="mb-2 text-xl font-semibold">
                Correctly {correctAnswersCount} out of {totalQuestions}{" "}
                questions
              </p>
              <p className="text-lg text-gray-600">
                Time taken: {formattedTime}
              </p>
            </div>
          </div>
        </main>
      </AppLayout>
    );
  }

  if (!currentQuestion) {
    return null; // or some loading state
  }

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
            <h2 className="mb-4 text-xl">{currentQuestion.text}</h2>
            <AnswersList
              answers={currentQuestion.answers}
              selectedAnswerId={selectedAnswerId}
              onSelect={selectAnswer}
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
              {questionNumber === totalQuestions
                ? "Finish Quiz"
                : "Next Question"}
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
            isActive={!isCompleted}
          />
          <QuizProgress
            questions={currentQuiz.questions}
            completedQuestions={completedQuestions}
          />
        </div>
      </main>
    </AppLayout>
  );
}
