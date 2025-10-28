import React from "react";

import { Modal } from "~/widgets";

interface GameCompletionModalProps {
  open: boolean;
  onClose: () => void;
  score: number;
  totalQuestions: number;
  timeSpent: number;
  difficulty: string;
  onPlayAgain?: () => void;
  onNewQuiz?: () => void;
}

function GameCompletionModal({
  open,
  onClose,
  score,
  totalQuestions,
  timeSpent,
  difficulty,
  onPlayAgain,
  onNewQuiz,
}: GameCompletionModalProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const minutes = Math.floor(timeSpent / 60);
  const seconds = timeSpent % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Excellent! 🎉";
    if (percentage >= 70) return "Great job! 👍";
    if (percentage >= 50) return "Good effort! 👌";
    return "Keep practicing! 💪";
  };

  const getPerformanceColor = () => {
    if (percentage >= 90) return "text-green-600";
    if (percentage >= 70) return "text-blue-600";
    if (percentage >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <div className="text-center">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">
            Quiz Completed!
          </h2>
          <p className="mb-6 text-gray-600">{getPerformanceMessage()}</p>

          <div className="mb-6 space-y-4">
            <div className="rounded-lg bg-gray-50 p-4">
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div
                    className={`text-3xl font-bold ${getPerformanceColor()}`}
                  >
                    {percentage}%
                  </div>
                  <div className="text-sm text-gray-600">Score</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-800">
                    {score}/{totalQuestions}
                  </div>
                  <div className="text-sm text-gray-600">Correct</div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <span>Time: {formattedTime}</span>
              <span>Difficulty: {difficulty}</span>
            </div>
          </div>

          <div className="flex gap-3">
            {onNewQuiz && (
              <button
                type="button"
                onClick={onNewQuiz}
                className="flex-1 rounded-lg bg-gray-200 px-4 py-2 text-gray-800 transition-colors hover:bg-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none"
              >
                New Quiz
              </button>
            )}
            {onPlayAgain && (
              <button
                type="button"
                onClick={onPlayAgain}
                className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                Play Again
              </button>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 focus:ring-2 focus:ring-gray-500 focus:outline-none"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
}

export { GameCompletionModal };
