import type { SettingsFormSchema } from "~/features/settings";

type State = {
  context: {
    isOpen: boolean;
    settings: SettingsFormSchema | null;
  };
};

type Actions = {
  actions: {
    setSettings: (settings: SettingsFormSchema) => void;
    openSettings: () => void;
    closeSettings: () => void;
    resetSettings: () => void;
  };
};

type Store = State & Actions;

export type {
  Store as SettingsStore,
  Actions as SettingsActions,
  State as SettingsState,
};
