import type { SettingsFormData } from "~/features/settings/ui/GameSettings";

type State = {
  context: {
    isOpen: boolean;
    settings: SettingsFormData | null;
  };
};

type Actions = {
  actions: {
    setSettings: (settings: SettingsFormData) => void;
    openSettings: () => void;
    closeSettings: () => void;
  };
};

type Store = State & Actions;

export type {
  Store as SettingsStore,
  Actions as SettingsActions,
  State as SettingsState,
};
