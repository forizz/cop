import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { QuizState, QuizStore } from "~/entities";

const defaultInitState: QuizState = {
  context: {},
};

const useQuizStore = create<QuizStore, [["zustand/immer", never]]>(
  immer((set) => ({
    ...defaultInitState,

    actions: {},
  })),
);

export { useQuizStore };
