import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import type { SettingsState, SettingsStore } from "~/features/settings";

const defaultInitState: SettingsState = {
  context: {
    isOpen: false,
    settings: null,
  },
};

const useSettingsStore = create<SettingsStore, [["zustand/immer", never]]>(
  immer((set) => ({
    ...defaultInitState,

    actions: {
      setSettings: (settings) =>
        set((state) => {
          state.context.settings = settings;
          state.context.isOpen = false;
        }),
      openSettings: () =>
        set((state) => {
          state.context.isOpen = true;
        }),
      closeSettings: () =>
        set((state) => {
          state.context.isOpen = false;
        }),
      resetSettings: () => set(defaultInitState),
    },
  })),
);

export { useSettingsStore };
