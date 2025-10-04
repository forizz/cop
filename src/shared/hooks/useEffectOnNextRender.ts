import React, { useEffect, useState } from "react";

const useEffectOnNextRender = (callback: React.EffectCallback) => {
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    if (!scheduled) {
      return;
    }

    setScheduled(false);
    callback();
  }, [scheduled]);

  return () => setScheduled(true);
};

export { useEffectOnNextRender };
