import type { Question } from "~/entities";

type State = {
  context: {
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
  };
};

type Actions = {
  actions: {
    selectAnswer: (id: number) => void;
    submitAnswer: () => void;
    nextQuestion: () => void;
    endQuiz: () => void;
  };
};

type Store = State & Actions;

export type { Store as QuizStore, Actions as QuizActions, State as QuizState };
