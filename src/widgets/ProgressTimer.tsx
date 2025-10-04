import React, { useEffect, useState } from "react";
import { useEffectOnNextRender } from "~/shared/hooks/useEffectOnNextRender";

type ProgressTimerProps = {
  circumference: number;
  totalTime: number;
  onComplete: () => void;
};

function ProgressTimer({
  circumference,
  totalTime,
  onComplete,
}: Readonly<ProgressTimerProps>) {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  const scheduledComplete = useEffectOnNextRender(() => {
    onComplete();
  });

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
    if (timeLeft <= 0) {
      scheduledComplete();
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const strokeDashoffset =
    circumference - (timeLeft / totalTime) * circumference;

  return (
    <div className="bg-accent-background flex flex-col items-center justify-center gap-2 rounded-md p-4 shadow-md">
      <div className="relative flex items-center justify-center">
        <svg
          viewBox="0 0 128 128"
          className="h-32 w-32 -rotate-90 transform"
        >
          <circle
            cx="64"
            cy="64"
            r="60"
            className="fill-none stroke-gray-300 stroke-4"
          />
          <circle
            cx="64"
            cy="64"
            r="60"
            className="stroke-primary fill-none stroke-4 transition-all ease-linear"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="text-primary absolute text-2xl font-bold">
          {formattedTime}
        </div>
      </div>
      <span className="text-sm">Time Remaining</span>
    </div>
  );
}

export { ProgressTimer };
