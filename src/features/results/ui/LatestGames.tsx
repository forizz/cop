import React from "react";

import { Play } from "lucide-react";
import { Link } from "react-router";

import { LatestGame, type LatestGameType } from "~/features/results";

interface LatestGamesProps {
  latestGames: LatestGameType[];
}

function LatestGames({ latestGames }: LatestGamesProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-foreground mb-6 text-2xl font-bold">Recent Games</h2>
      <div className="space-y-4">
        {latestGames.map((game) => (
          <LatestGame
            key={game.id}
            game={game}
          />
        ))}
      </div>
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="bg-primary text-background hover:bg-primary/90 inline-flex items-center gap-2 rounded-xl px-6 py-3 font-semibold transition-colors"
        >
          <Play className="h-5 w-5" />
          Play Another Quiz
        </Link>
      </div>
    </div>
  );
}

export { LatestGames };
