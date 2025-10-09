import { useCallback, useMemo, useReducer } from "react";

import type { Question, Quiz } from "~/entities";

interface QuizState {
  currentQuestionIndex: number;
  selectedAnswerId: number;
  isCompleted: boolean;
  correctAnswersCount: number;
  isSubmitted: boolean;
}

type QuizAction =
  | { type: "SELECT_ANSWER"; answerId: number }
  | { type: "SUBMIT_ANSWER"; isCorrect: boolean }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" };

interface UseQuizReturn {
  // Current question data
  question: {
    data: Question | undefined;
    number: number;
    correctAnswerId: number | undefined;
  };

  // Answer state
  answer: {
    selectedId: number;
    isSubmitted: boolean;
  };

  // Quiz progress
  progress: {
    isCompleted: boolean;
    correctCount: number;
    totalQuestions: number;
  };

  // Actions
  actions: {
    selectAnswer: (id: number) => void;
    submitAnswer: () => void;
    nextQuestion: () => void;
  };
}

const defaultAnswer = -1;

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswerId: action.answerId,
      };

    case "SUBMIT_ANSWER":
      return {
        ...state,
        isSubmitted: true,
        correctAnswersCount: action.isCorrect
          ? state.correctAnswersCount + 1
          : state.correctAnswersCount,
      };

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerId: defaultAnswer,
        isSubmitted: false,
      };

    case "COMPLETE_QUIZ":
      return {
        ...state,
        isCompleted: true,
      };

    default:
      return state;
  }
}

function useQuiz(currentQuiz: Quiz): UseQuizReturn {
  const [state, dispatch] = useReducer(quizReducer, {
    currentQuestionIndex: 0,
    selectedAnswerId: defaultAnswer,
    isCompleted: false,
    correctAnswersCount: 0,
    isSubmitted: false,
  });

  const currentQuestion = state.isCompleted
    ? undefined
    : currentQuiz.questions[state.currentQuestionIndex];

  const questionData = useMemo(
    () => ({
      data: currentQuestion,
      number: state.currentQuestionIndex + 1,
      correctAnswerId: currentQuestion
        ? currentQuestion.answers[currentQuestion.correctAnswer].id
        : undefined,
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
