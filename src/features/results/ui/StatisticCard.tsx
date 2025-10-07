import React from "react";

interface StatisticCardProps {
  children: React.ReactNode;
  stat: string | number;
  title: string;
}

function StatisticCard({ stat, title, children }: StatisticCardProps) {
  return (
    <li className="rounded-2xl bg-white p-6 text-center shadow-lg">
      {children}
      <h3 className="text-foreground mb-2 text-2xl font-bold">{stat}</h3>
      <p className="text-muted-foreground">{title}</p>
    </li>
  );
}

export { StatisticCard };
