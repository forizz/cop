import type { Difficulty, Question, Quiz } from "~/entities";

interface State {
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

interface Actions {
  initialize: (quiz: Quiz, difficulty: Difficulty) => void;
  selectAnswer: (id: number) => void;
  submitAnswer: () => void;
  nextQuestion: () => void;
  endQuiz: () => void;
  reset: () => void;
}

type Store = State & Actions;

export type { Store as QuizStore, Actions as QuizActions, State as QuizState };
