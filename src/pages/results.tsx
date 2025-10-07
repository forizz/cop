import React from "react";
import { AppLayout } from "~/widgets";
import {
  DetailedStats,
  latestGames,
  LatestGames,
  StatisticsCardList,
} from "~/features/results";
import { globalResults } from "~/entities/results";

export default function ResultsPage() {
  return (
    <AppLayout>
      <main className="flex flex-1 flex-col">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-12 text-center">
            <h1 className="text-foreground mb-4 text-4xl font-bold">
              Your Quiz Results
            </h1>
            <p className="text-muted-foreground text-xl">
              Track your progress and see how you're improving!
            </p>
          </div>

          <StatisticsCardList globalResults={globalResults} />

          <div className="grid grid-cols-2 gap-8">
            <DetailedStats globalResults={globalResults} />

            <LatestGames latestGames={latestGames} />
          </div>
        </div>
      </main>
    </AppLayout>
  );
}
