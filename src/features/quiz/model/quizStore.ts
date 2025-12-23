import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { Difficulty, Question, Quiz } from "~/entities";

interface QuizState {
  // Quiz data
  currentQuiz: Quiz | null;
  difficulty: Difficulty | null;
  questions: Question[];

  // Game state
  currentQuestionIndex: number;
  selectedAnswerId: number;
  isCompleted: boolean;
  correctAnswersCount: number;
  completedQuestions: number[];
  isSubmitted: boolean;

  // Computed values
  currentQuestion: Question | undefined;
  correctAnswerId: number | undefined;
  questionNumber: number;
  totalQuestions: number;
}

interface QuizActions {
  initialize: (quiz: Quiz, difficulty: Difficulty) => void;
  selectAnswer: (id: number) => void;
  submitAnswer: () => void;
  nextQuestion: () => void;
  endQuiz: () => void;
  reset: () => void;
}

type QuizStore = QuizState & QuizActions;

const initialState: QuizState = {
  currentQuiz: null,
  difficulty: null,
  questions: [],
  currentQuestionIndex: 0,
  selectedAnswerId: -1,
  isCompleted: false,
  correctAnswersCount: 0,
  completedQuestions: [],
  isSubmitted: false,
  currentQuestion: undefined,
  correctAnswerId: undefined,
  questionNumber: 1,
  totalQuestions: 0,
};

export const useQuizStore = create<QuizStore>()(
  immer((set, get) => ({
    ...initialState,

    initialize: (quiz: Quiz, difficulty: Difficulty) => {
      const questions = quiz.difficulty[difficulty] || [];

      set((state) => {
        state.currentQuiz = quiz;
        state.difficulty = difficulty;
        state.questions = questions;
        state.totalQuestions = questions.length;
        state.currentQuestionIndex = 0;
        state.selectedAnswerId = -1;
        state.isCompleted = false;
        state.correctAnswersCount = 0;
        state.completedQuestions = [];
        state.isSubmitted = false;
        state.questionNumber = 1;
        state.currentQuestion = questions[0];
        state.correctAnswerId =
          questions[0]?.answers[questions[0]?.correctAnswer]?.id;
      });
    },

    selectAnswer: (id: number) => {
      set((state) => {
        state.selectedAnswerId = id;
      });
    },

    submitAnswer: () => {
      const state = get();
      if (!state.currentQuestion) return;

      const selectedIndex = state.currentQuestion.answers.findIndex(
        (answer) => answer.id === state.selectedAnswerId,
      );

      const isCorrect = selectedIndex === state.currentQuestion.correctAnswer;
      const currentQuestionId = state.questions[state.currentQuestionIndex].id;

      set((state) => {
        state.isSubmitted = true;
        if (isCorrect) {
          state.correctAnswersCount += 1;
        }
        state.completedQuestions.push(currentQuestionId);
      });
    },

    nextQuestion: () => {
      const state = get();

      if (state.currentQuestionIndex < state.questions.length - 1) {
        set((state) => {
          state.currentQuestionIndex += 1;
          state.selectedAnswerId = -1;
          state.isSubmitted = false;
          state.questionNumber = state.currentQuestionIndex + 2;
          state.currentQuestion =
            state.questions[state.currentQuestionIndex + 1];
          state.correctAnswerId =
            state.currentQuestion?.answers[
              state.currentQuestion?.correctAnswer
            ]?.id;
        });
      } else {
        set((state) => {
          state.isCompleted = true;
        });
      }
    },

    endQuiz: () => {
      set((state) => {
        state.isCompleted = true;
      });
    },

    reset: () => {
      set(() => ({ ...initialState }));
    },
  })),
);

// Selectors for easier access to specific parts of the state
export const useQuizQuestion = () =>
  useQuizStore((state) => ({
    data: state.currentQuestion,
    number: state.questionNumber,
    correctAnswerId: state.correctAnswerId,
  }));

export const useQuizAnswer = () =>
  useQuizStore((state) => ({
    selectedId: state.selectedAnswerId,
    isSubmitted: state.isSubmitted,
  }));

export const useQuizProgress = () =>
  useQuizStore((state) => ({
    isCompleted: state.isCompleted,
    correctCount: state.correctAnswersCount,
    totalQuestions: state.totalQuestions,
    completedQuestions: state.completedQuestions,
  }));

export const useQuizActions = () =>
  useQuizStore((state) => ({
    selectAnswer: state.selectAnswer,
    submitAnswer: state.submitAnswer,
    nextQuestion: state.nextQuestion,
    endQuiz: state.endQuiz,
    initialize: state.initialize,
    reset: state.reset,
  }));
