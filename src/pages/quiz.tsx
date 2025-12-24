import { useCallback, useEffect, useMemo, useRef } from "react";

import { useNavigate } from "react-router";

import {
  type Quiz,
  useQuizActions,
  useQuizAnswer,
  useQuizProgress,
  useQuizQuestion,
  useQuizStore,
  useResults,
} from "~/entities";
import {
  AnswersList,
  GameCompletionModal,
  QuizProgress,
} from "~/features/quiz";
import { GameSettings, useSettingsStore } from "~/features/settings";
import type { SettingsFormData } from "~/features/settings/ui/GameSettings";
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

  const { initialize, selectAnswer, submitAnswer, nextQuestion, endQuiz } =
    useQuizActions();
  const {
    data: currentQuestion,
    number: questionNumber,
    correctAnswerId,
  } = useQuizQuestion();
  const { selectedId: selectedAnswerId, isSubmitted } = useQuizAnswer();
  const {
    isCompleted,
    correctCount: correctAnswersCount,
    totalQuestions,
  } = useQuizProgress();

  useEffect(() => {
    openSettings();
  }, [openSettings]);

  useEffect(() => {
    if (settings?.difficulty) {
      initialize(currentQuiz, settings.difficulty);
    }
  }, [initialize, currentQuiz, settings?.difficulty]);

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
    (data: SettingsFormData) => {
      console.log("Game Settings:", data);

      if (!currentQuiz.difficulty[data.difficulty]) {
        console.error(
          `Difficulty ${data.difficulty} is not available for this quiz`,
        );
        return;
      }

      initialize(currentQuiz, data.difficulty);

      timer.setTime(Number(data.time));
      timer.start();
    },
    [timer, currentQuiz, initialize],
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

  // Get questions from the store
  const questions = useQuizStore((state) => state.questions);

  if (!settings) {
    return (
      <PageBody>
        <GameSettings
          quiz={currentQuiz}
          onSubmit={onSubmitSettings}
          onClose={onCloseSettings}
        />
      </PageBody>
    );
  }

  if (isCompleted) {
    return (
      <PageBody>
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

        <p className="text-center text-xl">Quiz Completed</p>
      </PageBody>
    );
  }

  if (!currentQuestion) {
    return (
      <PageBody>
        <p className="text-xl">No questions available</p>
      </PageBody>
    );
  }

  return (
    <>
      <PageBody>
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
          <QuizProgress />
        </div>
      </PageBody>
    </>
  );
}

function PageBody({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-1 justify-center py-12">{children}</main>;
}
