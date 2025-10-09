import React, { useEffect, useRef } from "react";

const useEffectOnNextRender = (callback: React.EffectCallback) => {
  const scheduledRef = useRef(false);
  const callbackRef = useRef(callback);

  // Update callback ref when callback changes
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (!scheduledRef.current) {
      return;
    }

    scheduledRef.current = false;
    callbackRef.current();
  });

  return () => {
    scheduledRef.current = true;
  };
};

export { useEffectOnNextRender };
