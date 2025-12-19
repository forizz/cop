import React from "react";

import {
  DetailedStats,
  GamesResults,
  Heading,
  StatisticsCardList,
} from "~/features/results";

export default function ResultsPage() {
  return (
    <main className="flex flex-1 flex-col">
      <div className="container mx-auto px-4 py-12">
        <Heading />

        <StatisticsCardList />

        <div className="grid grid-cols-2 gap-8">
          <DetailedStats />
          <GamesResults />
        </div>
      </div>
    </main>
  );
}
