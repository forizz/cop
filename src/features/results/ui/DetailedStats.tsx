import React from "react";
import type { GlobalResults } from "~/entities/results";

interface DetailedStatsProps {
  globalResults: GlobalResults;
}

function DetailedStats({ globalResults }: DetailedStatsProps) {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg">
      <h2 className="text-foreground mb-6 text-2xl font-bold">
        Detailed Statistics
      </h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Best Time</span>
          <span className="text-foreground font-semibold">
            {globalResults.bestTime}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Games Won</span>
          <span className="text-foreground font-semibold">
            {globalResults.gamesCount.won} / {globalResults.gamesCount.total}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Perfect Games</span>
          <span className="text-foreground font-semibold">
            {globalResults.gamesCount.noMistakes}
          </span>
        </div>
        <div className="flex items-center justify-between border-b border-gray-100 py-3">
          <span className="text-muted-foreground">Average Score</span>
          <span className="text-foreground font-semibold">
            {globalResults.averageCorrect}/10
          </span>
        </div>
        <div className="flex items-center justify-between py-3">
          <span className="text-muted-foreground">Total Questions</span>
          <span className="text-foreground font-semibold">
            {globalResults.correctAnswers} / {globalResults.totalQuestions}
          </span>
        </div>
      </div>
    </div>
  );
}

export { DetailedStats };
