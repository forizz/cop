import React from "react";

import { createPortal } from "react-dom";

import { type SubmitHandler, useForm } from "react-hook-form";

import type { Difficulty } from "~/entities";

interface GameSettingsProps {
  onSubmit: SubmitHandler<IFormInput>;
}

export interface IFormInput {
  time: string;
  difficulty: Difficulty;
}

function GameSettings({ onSubmit }: GameSettingsProps) {
  const { register, handleSubmit } = useForm<IFormInput>();

  return createPortal(
    <div className="absolute inset-0 flex h-screen w-screen items-center justify-center overflow-hidden bg-zinc-600/30 backdrop-blur-xs">
      <div className="bg-white p-6">
        <p>Game Settings</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4"
        >
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="time">Time:</label>
            <select
              id="time"
              {...register("time")}
            >
              <option value="60">60 seconds</option>
              <option value="45">45 seconds</option>
              <option value="30">30 seconds</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-4">
            <label htmlFor="difficulty">Difficulty:</label>
            <select
              id="difficulty"
              {...register("difficulty")}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div className="flex items-center justify-between gap-4">
            <button type="button">Back</button>
            <button type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>,
    document.body,
  );
}

export { GameSettings };
