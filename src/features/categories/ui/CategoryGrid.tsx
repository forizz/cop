import React from "react";
import type { Category } from "~/entities";
import { CategoryCard } from "./CategoryCard";

function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid max-w-7xl flex-1 auto-rows-max grid-cols-2 gap-6">
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
