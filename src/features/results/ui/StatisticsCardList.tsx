import React, { memo } from "react";

import { Clock, Target, TrendingUp, Trophy } from "lucide-react";

import { useResults } from "~/entities/results";
import { secondsToTime } from "~/shared/utils";

import { StatisticCard } from "./StatisticCard";

function StatisticsCardList() {
  const gamesPlayed = useResults((state) => state.context.gamesPlayed);
  const timePlayed = useResults((state) => state.context.totalTimePlayed);
  const accuracy = useResults((state) => state.context.accuracy);
  const gamesWon = useResults((state) => state.context.gamesWon);

  return (
    <ul className="mb-12 grid grid-cols-4 gap-6">
      <StatisticCard
        title="Total Time Played"
        stat={secondsToTime(timePlayed)}
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
          <Clock className="h-8 w-8 text-blue-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={`${gamesWon}`}
        title="Wins"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <Trophy className="h-8 w-8 text-green-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={`${accuracy === -1 ? "N/A" : `${accuracy.toFixed(2)}%`}`}
        title="Accuracy"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
          <Target className="h-8 w-8 text-purple-600" />
        </div>
      </StatisticCard>

      <StatisticCard
        stat={gamesPlayed}
        title="Games Played"
      >
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
          <TrendingUp className="h-8 w-8 text-orange-600" />
        </div>
      </StatisticCard>
    </ul>
  );
}

const StatisticsCardListMemo = memo(StatisticsCardList);

export { StatisticsCardListMemo as StatisticsCardList };
