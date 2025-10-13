import React from "react";

import { ResultGame, type ResultStatGame } from "~/features/results";

interface BestGamesProps {
  bestGames: ResultStatGame[];
}

function BestGames({ bestGames }: BestGamesProps) {
  return (
    <ul className="space-y-4">
      {bestGames.map((game) => (
        <ResultGame
          key={game.id}
          game={game}
        />
      ))}
    </ul>
  );
}

export { BestGames };
