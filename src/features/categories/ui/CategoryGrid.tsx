import React from "react";
import type { Category } from "~/entities";
import { CategoryCard } from "./CategoryCard";

function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid w-1/2 grid-cols-2 gap-4">
      {categories.map((category) => (
        <CategoryCard
          key={category.link}
          category={category}
        />
      ))}
    </div>
  );
}

export { CategoryGrid };
