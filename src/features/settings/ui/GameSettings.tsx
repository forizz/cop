import React, { memo, useCallback } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";

import { type Difficulty, type Quiz } from "~/entities";
import {
  type SettingsFormSchema,
  settingsFormSchema,
  useSettingsStore,
} from "~/features/settings";
import { AppForm, AppFormField, Modal } from "~/widgets";

interface GameSettingsProps {
  quiz: Quiz;
  onSubmit?: SubmitHandler<SettingsFormSchema>;
  onClose?: () => void;
}

function GameSettings({ quiz, onSubmit, onClose }: GameSettingsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormSchema>({
    resolver: zodResolver(settingsFormSchema),
    defaultValues: {
      time: "60",
      difficulty: "easy",
    },
  });

  const { setSettings, closeSettings } = useSettingsStore(
    (state) => state.actions,
  );
  const isOpen = useSettingsStore((state) => state.context.isOpen);

  const onSubmitSettings = useCallback(
    (data: SettingsFormSchema) => {
      setSettings(data);
      onSubmit?.(data);
      closeSettings();
    },
    [setSettings, closeSettings, onSubmit],
  );

  const availableDifficultiesForQuiz = Object.keys(
    quiz.difficulty,
  ) as Difficulty[];
  const availableTimeOptions = [60, 45, 30];

  return (
    <Modal
      open={isOpen}
      closeOnBackdropClick={false}
      onClose={onClose}
    >
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">Game Settings</h2>
        <AppForm
          onSubmit={handleSubmit(onSubmitSettings)}
          onClose={onClose}
        >
          <AppFormField error={errors.time && errors.time.message}>
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="time"
                className="font-medium"
              >
                Time:
              </label>
              <select
                id="time"
                {...register("time")}
                className="rounded border border-gray-300 px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {availableTimeOptions.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option} seconds
                  </option>
                ))}
              </select>
            </div>
          </AppFormField>
          <AppFormField error={errors.difficulty && errors.difficulty.message}>
            <div className="flex items-center justify-between gap-4">
              <label
                htmlFor="difficulty"
                className="font-medium"
              >
                Difficulty:
              </label>
              <select
                id="difficulty"
                {...register("difficulty")}
                className="rounded border border-gray-300 px-3 py-1 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                {availableDifficultiesForQuiz.map((difficulty) => (
                  <option
                    key={difficulty}
                    value={difficulty}
                  >
                    {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </AppFormField>
        </AppForm>
      </div>
    </Modal>
  );
}

const GameSettingsMemo = memo(GameSettings);

export { GameSettingsMemo as GameSettings };
