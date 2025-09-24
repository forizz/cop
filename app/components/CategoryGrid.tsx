import React from "react";
import type { Category } from "~/types";
import CategoryCard from "~/components/CategoryCard";

export default function CategoryGrid({
  categories,
}: {
  categories: Category[];
}) {
  return (
    <div className="grid">
      {categories.map((category) => (
        <CategoryCard category={category} />
      ))}
    </div>
  );
}
