import { useCallback, useEffect, useRef, useState } from "react";

interface UseTimerReturn {
  timeLeft: number;
  minutes: number;
  seconds: number;
  formattedTime: string;
  start: () => void;
  stop: () => void;
}

function useTimer(totalTime: number, onComplete: () => void): UseTimerReturn {
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  const start = useCallback(() => {
    setIsRunning(true);
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (prevTimeLeft <= 1) {
            onComplete();
            setIsRunning(false);
            return 0;
          }
          return prevTimeLeft - 1;
        });
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning, onComplete]);

  return {
    timeLeft,
    minutes,
    seconds,
    formattedTime,
    start,
    stop,
  };
}

export { useTimer };
