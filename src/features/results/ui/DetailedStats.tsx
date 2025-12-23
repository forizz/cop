import React, { memo } from "react";

import { useResults } from "~/entities/results";
import { secondsToTime } from "~/shared/utils";

function DetailedStats() {
  const perfectGames = useResults((state) => state.context.perfectGames);
  const bestTime = useResults((state) => state.context.bestTime);
  const gamesWon = useResults((state) => state.context.gamesWon);
  const gamesPlayed = useResults((state) => state.context.gamesPlayed);
  const averageCorrect = useResults((state) => state.context.averageCorrect);
  const totalQuestions = useResults((state) => state.context.questions.total);
  const completedQuestions = useResults(
    (state) => state.context.questions.completed,
  );

  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-foreground mb-6 text-2xl font-bold">
        Detailed Statistics
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Best Time</span>
          <span className="text-foreground font-semibold">
            {secondsToTime(bestTime)}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Games Won</span>
          <span className="text-foreground font-semibold">
            {gamesWon} / {gamesPlayed}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Perfect Games</span>
          <span className="text-foreground font-semibold">{perfectGames}</span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Average Score</span>
          <span className="text-foreground font-semibold">
            {averageCorrect}/10
          </span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-muted-foreground">Total Questions</span>
          <span className="text-foreground font-semibold">
            {completedQuestions} / {totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
}

const DetailedStatsMemo = memo(DetailedStats);

export { DetailedStatsMemo as DetailedStats };
