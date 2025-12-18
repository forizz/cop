import { useMemo } from "react";

import type { UseTimerReturn } from "~/shared/hooks/useTimer";

type ProgressTimerProps = {
  circumference: number;
  timer: UseTimerReturn;
};

const ProgressTimer = ({ circumference, timer }: ProgressTimerProps) => {
  const strokeDashoffset = useMemo(() => {
    if (!timer.timeLeft || !timer.totalTime) return 0;

    return circumference - (timer.timeLeft / timer.totalTime) * circumference;
  }, [circumference, timer.timeLeft, timer.totalTime]);

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
            className="stroke-primary fill-none stroke-4 transition-all duration-1000 ease-linear"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
          />
        </svg>
        <div className="text-primary absolute text-2xl font-bold">
          {timer.formattedTime}
        </div>
      </div>
      <span className="text-sm">Time Remaining</span>
    </div>
  );
};

export { ProgressTimer };
