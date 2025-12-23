import type { Difficulty } from "~/entities";

type State = {
  context: {
    difficulty: Difficulty;
    settingsOpen: boolean;
  };
};

type Actions = {
  actions: {};
};

type Store = State & Actions;

export type { Store as QuizStore, Actions as QuizActions, State as QuizState };
