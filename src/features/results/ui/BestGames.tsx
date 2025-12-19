import React from "react";

import { useResults } from "~/entities/results";
import { ResultGame } from "~/features/results";

function BestGames() {
  const getBestGames = useResults((state) => state.actions.getBestGames);

  return (
    <ul className="space-y-4">
      {getBestGames().map((game) => (
        <ResultGame
          key={game.id}
          game={game}
        />
      ))}
    </ul>
  );
}

export { BestGames };
