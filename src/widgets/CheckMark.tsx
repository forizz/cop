import React from "react";
import { Check } from "lucide-react";

function CheckMark() {
  return (
    <span className="bg-primary inline-flex items-center justify-center rounded-full p-0.5">
      <Check
        className="stroke-white"
        size="12"
      />
    </span>
  );
}

export { CheckMark };
