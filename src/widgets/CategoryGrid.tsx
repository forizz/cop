import React from "react";
import type { Category } from "~/shared/types";
import { CategoryCard } from "~/widgets";

function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <div className="grid grid-cols-2 gap-4">
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
