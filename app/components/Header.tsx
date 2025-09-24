import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link to="/">IPZ Quiz</Link>
      <form>
        <input
          type="search"
          placeholder="Search"
        />
      </form>
    </header>
  );
}
