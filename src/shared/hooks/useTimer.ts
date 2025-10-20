import { useEffect, useState } from "react";

interface UseTimerReturn {
  timeLeft: number;
  minutes: number;
  seconds: number;
  formattedTime: string;
}

function useTimer(
  totalTime: number,
  onComplete: () => void,
  isActive: boolean = true,
): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  useEffect(() => {
    if (!isActive) return;

    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }

    if (timeLeft <= 0) {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 1000);
      return () => clearTimeout(completeTimer);
    }
  }, [timeLeft, onComplete, isActive]);

  return {
    timeLeft,
    minutes,
    seconds,
    formattedTime,
  };
}

export { useTimer };
