import React from "react";

import { Search } from "lucide-react";
import { Link } from "react-router";

function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <Link to="/">
        <img
          src="/public/QuizLogo.png"
          alt="logo"
          className="h-12"
        />
      </Link>

      <Link
        to="/results"
        className="border-primary bg-primary rounded-4xl border-2 px-4 py-2"
      >
        <span className="text-background">Results</span>
      </Link>
    </header>
  );
}

export { Header };
