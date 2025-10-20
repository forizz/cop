import React from "react";

import type { ResultStatGame } from "../index";

interface ResultGameProps {
  game: ResultStatGame;
}

function ResultGame({ game }: ResultGameProps) {
  return (
    <li className="flex items-center justify-between rounded-xl bg-gray-50 p-4 transition-colors hover:bg-gray-100">
      <div className="flex-1">
        <h3 className="text-foreground mb-1 font-semibold">{game.title}</h3>
        <p className="text-muted-foreground text-sm">
          {game.category} • {game.date}
        </p>
      </div>
      <div className="text-right">
        <div className="text-foreground text-lg font-bold">
          {game.score.result}/{game.score.total}
        </div>
        <div className="text-muted-foreground text-sm">{game.time}</div>
      </div>
    </li>
  );
}

export { ResultGame };
