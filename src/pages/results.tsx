import React from "react";
import { AppLayout } from "~/widgets";
import { quizes } from "~/shared/data";

const latestGames = [
  {
    title: quizes[0].title,
    category: quizes[0].category,
  },
  {
    title: quizes[1].title,
    category: quizes[1].category,
  },
];

const globalResults = {
  overallTime: "00:15:42",
  bestTime: "00:00:42",
  gamesCount: {
    total: 10,
    won: 7,
    noMistakes: 2,
  },
  averageCorrect: 8,
};

export default function ResultsPage() {
  return (
    <AppLayout>
      <main className="flex flex-1 flex-col gap-2 p-8">
        <h1>Results</h1>
        <div>
          <div>
            <section>
              <h3>Overall quiz time</h3>
              {globalResults.overallTime}
            </section>
            <section>
              <h3>Best quiz time</h3>
              {globalResults.bestTime}
            </section>
            <section>
              <h3>Games count: </h3>
              {globalResults.gamesCount.total}
              <p>Won games: </p>
              {globalResults.gamesCount.won}
              <p>Games without mistakes: </p>
              {globalResults.gamesCount.noMistakes}
            </section>
            <section>
              <h3>Average correct answers</h3>
              {globalResults.averageCorrect}
            </section>
          </div>
          <section>
            <h2>Latest games</h2>
            <ul className="space-y-2">
              {latestGames.map((game, index) => (
                <li
                  key={index}
                  className="bg-accent-background flex flex-col gap-1 rounded-xl p-2 px-4"
                >
                  <span className="text-xl font-semibold">{game.title}</span>
                  <span className="text-muted-foreground text-sm">
                    {game.category}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </AppLayout>
  );
}
