import React from "react";
import { Link } from "react-router";
import { Search } from "lucide-react";

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

      <form>
        <div className="relative">
          <Search className="absolute inset-2 left-2 stroke-zinc-500" />
          <input
            type="search"
            placeholder="Search"
            className="rounded-2xl border border-zinc-700 px-4 py-2 pl-10"
          />
        </div>
      </form>

      <button
        type="button"
        className="border-primary bg-primary rounded-4xl border-2 px-4 py-2"
      >
        <span className="text-background">Sign Up</span>
      </button>
    </header>
  );
}

export { Header };
