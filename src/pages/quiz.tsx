import { useCallback, useEffect, useState } from "react";

import { useNavigate } from "react-router";

import type { Difficulty } from "~/entities";
import {
  AnswersList,
  GameCompletionModal,
  GameSettings,
  type IFormInput,
  QuizProgress,
  useQuiz,
} from "~/features/quiz";
import { quizzes } from "~/shared/data";
import { useTimer } from "~/shared/hooks/useTimer";
import { AppLayout, Breadcrumbs, ProgressTimer } from "~/widgets";

const currentQuiz = quizzes[0];
const CIRCUMFERENCE = 2 * Math.PI * 60;

export default function QuizPage() {
  const [difficulty, setDifficulty] = useState<Difficulty>(
    () => (Object.keys(currentQuiz.difficulty)[0] as Difficulty) || "easy",
  );
  const [settingsOpen, setSettingsOpen] = useState(false);

  const questions = currentQuiz.difficulty[difficulty] || [];

  useEffect(() => {
    // eslint-disable-next-line
    setSettingsOpen(true);
  }, []);

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
  } = useQuiz(currentQuiz, difficulty);

  const timer = useTimer({
    onComplete: () => {},
  });

  const navigate = useNavigate();

  const onSubmit = useCallback(() => {
    if (selectedAnswerId === -1) return;

    submitAnswer();
  }, [selectedAnswerId, submitAnswer]);

  const onSubmitSettings = useCallback(
    (data: IFormInput) => {
      console.log("Game Settings:", data);

      // Validate that the selected difficulty is available
      if (!currentQuiz.difficulty[data.difficulty]) {
        console.error(
          `Difficulty ${data.difficulty} is not available for this quiz`,
        );
        return;
      }

      setDifficulty(data.difficulty);
      timer.setTime(Number(data.time));
      timer.start();
      setSettingsOpen(false);
    },
    [timer],
  );

  const onCloseSettings = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isCompleted) {
      timer.stop();
    }
  }, [timer, isCompleted]);

  return (
    <>
      <GameCompletionModal
        open={isCompleted}
        onClose={() => {
          window.location.reload();
        }}
        score={correctAnswersCount}
        totalQuestions={totalQuestions}
        timeSpent={timer.elapsedTime()}
        difficulty={difficulty}
        onPlayAgain={() => {
          window.location.reload();
        }}
        onNewQuiz={() => {
          window.location.href = "/";
        }}
      />

      <AppLayout>
        {currentQuestion ? (
          <main className="flex flex-1 justify-center py-12">
            <GameSettings
              quiz={currentQuiz}
              open={settingsOpen}
              onSubmit={onSubmitSettings}
              onClose={onCloseSettings}
            />

            <div className="p-8">
              <Breadcrumbs />

              <h1 className="mb-4 text-3xl font-bold">{currentQuiz.title}</h1>
              <div className="mb-4">
                <p className="text-sm text-gray-600">
                  Question {questionNumber} of {questions.length}
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
                timer={timer}
              />
              <QuizProgress
                questions={questions}
                completedQuestions={completedQuestions}
              />
            </div>
          </main>
        ) : (
          <main className="flex flex-1 justify-center py-12">
            <p className="text-xl">No questions available</p>
          </main>
        )}
      </AppLayout>
    </>
  );
}
