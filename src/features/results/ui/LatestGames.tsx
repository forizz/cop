import React from "react";

import { Play } from "lucide-react";
import { Link } from "react-router";

import { ResultGame, type ResultStatGame } from "~/features/results";

interface LatestGamesProps {
  latestGames: ResultStatGame[];
}

function LatestGames({ latestGames }: LatestGamesProps) {
  return (
    <>
      <ul className="space-y-4">
        {latestGames.map((game) => (
          <ResultGame
            key={game.id}
            game={game}
          />
        ))}
      </ul>
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="bg-primary text-background hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors"
        >
          <Play className="h-5 w-5" />
          Play Another Quiz
        </Link>
      </div>
    </>
  );
}

export { LatestGames };
