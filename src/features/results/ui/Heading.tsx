import React from "react";

function Heading() {
  return (
    <div className="mb-12 text-center">
      <h1 className="text-foreground mb-4 text-4xl font-bold">
        Your Quiz Results
      </h1>
      <p className="text-muted-foreground text-xl">
        Track your progress and see how you're improving!
      </p>
    </div>
  );
}

export { Heading };
