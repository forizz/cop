import { useCallback, useEffect, useMemo, useRef } from "react";

import { useNavigate } from "react-router";

import { type Quiz, useResults } from "~/entities";
import {
  AnswersList,
  GameCompletionModal,
  QuizProgress,
  useQuiz,
} from "~/features/quiz";
import { GameSettings, useSettingsStore } from "~/features/settings";
import type { ISettingsForm } from "~/features/settings/ui/GameSettings";
import { quizzes } from "~/shared/data";
import { useTimer } from "~/shared/hooks/useTimer";
import { Breadcrumbs, ProgressTimer } from "~/widgets";

const CIRCUMFERENCE = 2 * Math.PI * 60;

export default function QuizPage({ id }: { id: number }) {
  const currentQuiz = useMemo<Quiz>(
    () => quizzes.find((q) => q.id === id) || quizzes[0],
    [id],
  );
  const gameRegistered = useRef(false);

  const settings = useSettingsStore((state) => state.context.settings);
  const { openSettings } = useSettingsStore((state) => state.actions);

  const { registerGame } = useResults((state) => state.actions);

  useEffect(() => {
    openSettings();
  }, [openSettings]);

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
    actions: { selectAnswer, submitAnswer, nextQuestion, endQuiz },
  } = useQuiz(currentQuiz, settings?.difficulty || "easy");

  const timer = useTimer({
    onComplete: endQuiz,
  });

  const navigate = useNavigate();

  const handleFinishQuiz = useCallback(() => {
    registerGame({
      id: Date.now(),
      title: currentQuiz.title,
      category: currentQuiz.category,
      time: timer.elapsedTime(),
      score: { result: correctAnswersCount, total: totalQuestions },
      date: new Date().toLocaleDateString(),
      difficulty: settings?.difficulty || "easy",
      questions: {
        total: totalQuestions,
        completed: correctAnswersCount,
      },
    });
    gameRegistered.current = true;
  }, [
    registerGame,
    timer,
    correctAnswersCount,
    totalQuestions,
    settings,
    currentQuiz,
  ]);

  const onSubmit = useCallback(() => {
    if (selectedAnswerId === -1) return;

    submitAnswer();
  }, [selectedAnswerId, submitAnswer]);

  const onSubmitSettings = useCallback(
    (data: ISettingsForm) => {
      console.log("Game Settings:", data);

      if (!currentQuiz.difficulty[data.difficulty]) {
        console.error(
          `Difficulty ${data.difficulty} is not available for this quiz`,
        );
        return;
      }

      timer.setTime(Number(data.time));
      timer.start();
    },
    [timer, currentQuiz],
  );

  const onCloseSettings = useCallback(() => {
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    if (isCompleted) {
      timer.stop();

      if (gameRegistered.current) return;
      handleFinishQuiz();
    }
  }, [timer, isCompleted, handleFinishQuiz]);

  const questions =
    currentQuiz.difficulty[settings?.difficulty || "easy"] || [];

  return (
    <>
      <GameCompletionModal
        open={isCompleted}
        onClose={() => {
          window.location.reload();
          gameRegistered.current = false;
        }}
        score={correctAnswersCount}
        totalQuestions={totalQuestions}
        timeSpent={timer.elapsedTime()}
        difficulty={settings?.difficulty || "easy"}
        onPlayAgain={() => {
          window.location.reload();
        }}
        onNewQuiz={() => navigate("/")}
      />

      <GameSettings
        quiz={currentQuiz}
        onSubmit={onSubmitSettings}
        onClose={onCloseSettings}
      />

      <main className="flex flex-1 justify-center py-12">
        {currentQuestion ? (
          <>
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
          </>
        ) : (
          <p className="text-xl">No questions available</p>
        )}
      </main>
    </>
  );
}
