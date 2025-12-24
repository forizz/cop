import React, { memo, useCallback } from "react";

import { type SubmitHandler, useForm } from "react-hook-form";

import { type Difficulty, type Quiz } from "~/entities";
import { useSettingsStore } from "~/features/settings";
import { Modal } from "~/widgets";

interface GameSettingsProps {
  quiz: Quiz;
  onSubmit?: SubmitHandler<SettingsFormData>;
  onClose?: () => void;
}

export interface SettingsFormData {
  time: number;
  difficulty: Difficulty;
}

function GameSettings({ quiz, onSubmit, onClose }: GameSettingsProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SettingsFormData>({
    defaultValues: {
      time: 60,
      difficulty: "easy",
    },
  });

  const { setSettings, closeSettings } = useSettingsStore(
    (state) => state.actions,
  );
  const isOpen = useSettingsStore((state) => state.context.isOpen);

  const onSubmitSettings = useCallback(
    (data: SettingsFormData) => {
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
        <form
          onSubmit={handleSubmit(onSubmitSettings)}
          className="flex flex-col gap-4"
        >
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
            <span className="text-red-500">
              {errors.time && errors.time.message}
            </span>
          </div>
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
            <span className="text-red-500">
              {errors.difficulty && errors.difficulty.message}
            </span>
          </div>
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded border border-gray-300 px-4 py-2 text-gray-600 hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            >
              Back
            </button>
            <button
              type="submit"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

const GameSettingsMemo = memo(GameSettings);

export { GameSettingsMemo as GameSettings };
