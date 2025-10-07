import React from "react";

import { Link } from "react-router";

import type { Category } from "~/entities";

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={category.link}
      className="group bg-background border-primary/20 flex h-full transform flex-col overflow-hidden rounded-2xl border shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative overflow-hidden">
        <img
          src={category.image.href}
          alt={category.image.alt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        <h2 className="absolute right-4 bottom-4 left-4 text-xl font-bold text-white drop-shadow-lg">
          {category.title}
        </h2>
      </div>
    </Link>
  );
}

export { CategoryCard };
