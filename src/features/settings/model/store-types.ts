import type { ISettingsForm } from "~/features/settings";

type State = {
  context: {
    isOpen: boolean;
    settings: ISettingsForm | null;
  };
};

type Actions = {
  actions: {
    setSettings: (settings: ISettingsForm) => void;
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
