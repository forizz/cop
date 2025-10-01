import React from "react";
import type { Category } from "~/types";
import CategoryCard from "~/components/CategoryCard";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
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
