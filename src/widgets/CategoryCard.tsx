import React from "react";
import { Link } from "react-router";
import type { Category } from "~/shared/types";

function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={category.link}
      key={category.link}
      className="border-primary flex flex-col items-center justify-between rounded-2xl border-2"
    >
      <img
        src={category.image.href}
        alt={category.image.alt}
        className="w-full"
      />
      <h2 className="bg-primary text-background flex w-full justify-center rounded-b-xl py-4">
        {category.title}
      </h2>
    </Link>
  );
}

export { CategoryCard };
