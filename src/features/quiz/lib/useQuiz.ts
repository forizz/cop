import { useCallback, useMemo, useReducer } from "react";

import type { Difficulty, Question, Quiz } from "~/entities";

import {
  getCorrectAnswerId,
  getCurrentQuestion,
  initialQuizState,
  quizReducer,
} from "./quizReducer";

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
    completedQuestions: number[];
  };
  actions: {
    selectAnswer: (id: number) => void;
    submitAnswer: () => void;
    nextQuestion: () => void;
  };
}

function useQuiz(currentQuiz: Quiz, difficulty: Difficulty): UseQuizReturn {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  const questions = useMemo(
    () => currentQuiz.difficulty[difficulty] || [],
    [currentQuiz, difficulty],
  );

  const currentQuestion = getCurrentQuestion(state, questions);

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
      totalQuestions: questions.length,
      completedQuestions: state.completedQuestions,
    }),
    [
      state.isCompleted,
      state.correctAnswersCount,
      questions.length,
      state.completedQuestions,
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
    const currentQuestionId = questions[state.currentQuestionIndex].id;
    dispatch({
      type: "SUBMIT_ANSWER",
      isCorrect,
      questionId: currentQuestionId,
    });
  }, [
    currentQuestion,
    state.selectedAnswerId,
    questions,
    state.currentQuestionIndex,
  ]);

  const nextQuestion = useCallback(() => {
    if (state.currentQuestionIndex < questions.length - 1) {
      dispatch({ type: "NEXT_QUESTION" });
    } else {
      dispatch({ type: "COMPLETE_QUIZ" });
    }
  }, [state.currentQuestionIndex, questions]);

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
