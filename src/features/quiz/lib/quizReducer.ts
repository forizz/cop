import type { Question } from "~/entities";

export interface QuizState {
  currentQuestionIndex: number;
  selectedAnswerId: number;
  isCompleted: boolean;
  correctAnswersCount: number;
  completedQuestions: number[];
  isSubmitted: boolean;
}

export type QuizAction =
  | { type: "SELECT_ANSWER"; answerId: number }
  | { type: "SUBMIT_ANSWER"; isCorrect: boolean; questionId: number }
  | { type: "NEXT_QUESTION" }
  | { type: "COMPLETE_QUIZ" };

export const initialQuizState: QuizState = {
  currentQuestionIndex: 0,
  selectedAnswerId: -1,
  isCompleted: false,
  correctAnswersCount: 0,
  completedQuestions: [],
  isSubmitted: false,
};

export function quizReducer(state: QuizState, action: QuizAction): QuizState {
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
        completedQuestions: [...state.completedQuestions, action.questionId],
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: state.currentQuestionIndex + 1,
        selectedAnswerId: -1,
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

// Helper function to get current question
export function getCurrentQuestion(
  state: QuizState,
  questions: Question[],
): Question | undefined {
  return state.isCompleted ? undefined : questions[state.currentQuestionIndex];
}

// Helper function to get correct answer ID
export function getCorrectAnswerId(
  question: Question | undefined,
): number | undefined {
  return question ? question.answers[question.correctAnswer].id : undefined;
}
