import React from "react";

import { Clock, Target, TrendingUp, Trophy } from "lucide-react";

import type { GlobalResults } from "~/entities/results";

import { StatisticCard } from "./StatisticCard";

interface StatisticsCardListProps {
  globalResults: GlobalResults;
}

function StatisticsCardList({ globalResults }: StatisticsCardListProps) {
  const winRate = Math.round(
    (globalResults.gamesCount.won / globalResults.gamesCount.total) * 100,
  );
  const accuracyRate = Math.round(
    (globalResults.correctAnswers / globalResults.totalQuestions) * 100,
  );

  return (
    <div className="mb-12 grid grid-cols-4 gap-6">
      <StatisticCard
        title="Total Time Played"
        stat={globalResults.overallTime}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Clock className="h-8 w-8 text-blue-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={`${winRate}%`}
        title="Win Rate"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Trophy className="h-8 w-8 text-green-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={`${accuracyRate}%`}
        title="Accuracy"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <Target className="h-8 w-8 text-purple-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={globalResults.gamesCount.total}
        title="Games Played"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
          <TrendingUp className="h-8 w-8 text-orange-600" />
        </div>
      </StatisticCard>
    </div>
  );
}

export { StatisticsCardList };
