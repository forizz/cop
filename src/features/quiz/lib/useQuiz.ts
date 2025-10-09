import { useCallback, useState } from "react";

import type { Question, Quiz } from "~/entities";

interface UseQuizReturn {
  selectedAnswerId: number;
  currentQuestion: Question | undefined;
  isCompleted: boolean;
  isSubmitted: boolean;
  correctAnswersCount: number;
  questionNumber: number;
  currentQuestionIndex: number;
  correctAnswerId: number | undefined;
  nextQuestion: () => void;
  submitAnswer: () => void;
  selectAnswer: (id: number) => void;
}

const defaultAnswer = -1;

function useQuiz(currentQuiz: Quiz): UseQuizReturn {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState(defaultAnswer);
  const [isCompleted, setIsCompleted] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentQuestion = isCompleted
    ? undefined
    : currentQuiz.questions[currentQuestionIndex];
  const questionNumber = currentQuestionIndex + 1;
  const correctAnswerId = currentQuestion
    ? currentQuestion.answers[currentQuestion.correctAnswer].id
    : undefined;

  const nextQuestion = useCallback(() => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswerId(defaultAnswer);
      setIsSubmitted(false);
    } else {
      setIsCompleted(true);
    }
  }, [currentQuestionIndex, currentQuiz.questions.length]);

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;

    const selectedIndex = currentQuestion.answers.findIndex(
      (answer) => answer.id === selectedAnswerId,
    );

    if (selectedIndex === currentQuestion.correctAnswer) {
      setCorrectAnswersCount((prev) => prev + 1);
    }

    setIsSubmitted(true);
  }, [selectedAnswerId, currentQuestion]);

  const selectAnswer = useCallback((id: number) => {
    setSelectedAnswerId(id);
  }, []);

  return {
    selectedAnswerId,
    currentQuestion,
    isCompleted,
    isSubmitted,
    correctAnswersCount,
    questionNumber,
    currentQuestionIndex,
    correctAnswerId,
    selectAnswer,
    submitAnswer,
    nextQuestion,
  };
}

export { useQuiz };
