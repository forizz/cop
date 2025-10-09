import { useCallback, useMemo, useReducer } from "react";

import type { Question, Quiz } from "~/entities";

import {
  getCorrectAnswerId,
  getCurrentQuestion,
  initialQuizState,
  quizReducer,
} from "../index";

interface UseQuizReturn {
  question: {
    data: Question | undefined;
    number: number;
    correctAnswerId: number | undefined;
  };
  answer: {
    selectedId: number;
    isSubmitted: boolean;
  };
  progress: {
    isCompleted: boolean;
    correctCount: number;
    totalQuestions: number;
  };
  actions: {
    selectAnswer: (id: number) => void;
    submitAnswer: () => void;
    nextQuestion: () => void;
  };
}

function useQuiz(currentQuiz: Quiz): UseQuizReturn {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  const currentQuestion = getCurrentQuestion(state, currentQuiz.questions);

  const questionData = useMemo(
    () => ({
      data: currentQuestion,
      number: state.currentQuestionIndex + 1,
      correctAnswerId: getCorrectAnswerId(currentQuestion),
    }),
    [currentQuestion, state.currentQuestionIndex],
  );

  const answerData = useMemo(
    () => ({
      selectedId: state.selectedAnswerId,
      isSubmitted: state.isSubmitted,
    }),
    [state.selectedAnswerId, state.isSubmitted],
  );

  const progressData = useMemo(
    () => ({
      isCompleted: state.isCompleted,
      correctCount: state.correctAnswersCount,
      totalQuestions: currentQuiz.questions.length,
    }),
    [
      state.isCompleted,
      state.correctAnswersCount,
      currentQuiz.questions.length,
    ],
  );

  const selectAnswer = useCallback((id: number) => {
    dispatch({ type: "SELECT_ANSWER", answerId: id });
  }, []);

  const submitAnswer = useCallback(() => {
    if (!currentQuestion) return;

    const selectedIndex = currentQuestion.answers.findIndex(
      (answer) => answer.id === state.selectedAnswerId,
    );

    const isCorrect = selectedIndex === currentQuestion.correctAnswer;
    dispatch({ type: "SUBMIT_ANSWER", isCorrect });
  }, [currentQuestion, state.selectedAnswerId]);

  const nextQuestion = useCallback(() => {
    if (state.currentQuestionIndex < currentQuiz.questions.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      dispatch({ type: "COMPLETE_QUIZ" });
    }
  }, [state.currentQuestionIndex, currentQuiz.questions.length]);

  return {
    question: questionData,
    answer: answerData,
    progress: progressData,
    actions: {
      selectAnswer,
      submitAnswer,
      nextQuestion,
    },
  };
}

export { useQuiz };
