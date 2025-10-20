import React, { useState } from "react";

import clsx from "clsx";

import { BestGames, LatestGames, latestGames } from "~/features/results";
import { bestGames } from "~/features/results/model/results";

type GameTab = "best" | "latest";

function GamesResults() {
  const [resultTab, setResultTab] = useState<GameTab>("latest");

  return (
    <div className="space-y-4 rounded-2xl bg-white p-8 shadow-lg">
      <div className="flex gap-8">
        <button
          type="button"
          className={clsx(
            "cursor-pointer border-b-4 p-2",
            resultTab === "latest" ? "border-primary" : "border-transparent",
          )}
          onClick={() => setResultTab("latest")}
        >
          <span className="text-foreground mb-6 text-2xl font-bold">
            Recent Games
          </span>
        </button>
        <button
          type="button"
          className={clsx(
            "cursor-pointer border-b-4 p-2",
            resultTab === "best" ? "border-primary" : "border-transparent",
          )}
          onClick={() => setResultTab("best")}
        >
          <span className="text-foreground mb-6 text-2xl font-bold">
            Best Games
          </span>
        </button>
      </div>
      {resultTab === "latest" ? (
        <LatestGames latestGames={latestGames} />
      ) : (
        <BestGames bestGames={bestGames} />
      )}
    </div>
  );
}

export { GamesResults };
