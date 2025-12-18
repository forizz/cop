import { useCallback, useEffect, useMemo, useRef, useState } from "react";

interface UseTimerProps {
  onComplete?: () => void;
}

interface UseTimerReturn {
  totalTime: number | null;
  startTime: number | null;
  timeLeft: number | null;
  formattedTime: string;
  elapsedTime: () => number;
  start: () => void;
  stop: () => void;
  setTime: (time: number) => void;
}

function useTimer({ onComplete }: UseTimerProps): UseTimerReturn {
  const [totalTime, setTotalTime] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [isRunning, setIsRunning] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const start = useCallback(() => {
    setIsRunning(true);
    setStartTime(Date.now());
  }, []);

  const stop = useCallback(() => {
    setIsRunning(false);
  }, []);

  const setTime = useCallback((time: number) => {
    setTotalTime(time);
    setTimeLeft(time);
  }, []);

  const formattedTime = useMemo(() => {
    if (!timeLeft) return "00:00";

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  }, [timeLeft]);

  const elapsedTime = useCallback(() => {
    if (!startTime) return 0;

    return Math.floor((Date.now() - startTime) / 1000);
  }, [startTime]);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
          if (!prevTimeLeft) return 0;

          if (prevTimeLeft <= 1) {
            onComplete?.();
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
    totalTime,
    startTime,
    timeLeft,
    formattedTime,
    elapsedTime,
    start,
    stop,
    setTime,
  };
}

export { useTimer };
export type { UseTimerReturn };
