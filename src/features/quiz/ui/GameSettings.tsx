import React from "react";

import { type SubmitHandler, useForm } from "react-hook-form";

import type { Difficulty, Quiz } from "~/entities";
import { Modal } from "~/widgets";

interface GameSettingsProps {
  quiz: Quiz;
  open: boolean;
  onSubmit: SubmitHandler<IFormInput>;
  onClose: () => void;
}

export interface IFormInput {
  time: string;
  difficulty: Difficulty;
}

function GameSettings({ quiz, open, onSubmit, onClose }: GameSettingsProps) {
  const { register, handleSubmit } = useForm<IFormInput>();

  const availableDifficulties = Object.keys(quiz.difficulty) as Difficulty[];

  return (
    <Modal
      open={open}
      closeOnBackdropClick={false}
      onClose={onClose}
    >
      <div className="rounded-lg bg-white p-6 shadow-xl">
        <h2 className="mb-4 text-xl font-semibold">Game Settings</h2>
        <form
          onSubmit={handleSubmit(onSubmit)}
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
              <option value="60">60 seconds</option>
              <option value="45">45 seconds</option>
              <option value="30">30 seconds</option>
            </select>
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
              {availableDifficulties.map((difficulty) => (
                <option
                  key={difficulty}
                  value={difficulty}
                >
                  {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                </option>
              ))}
            </select>
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

export { GameSettings };
