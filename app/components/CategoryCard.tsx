import React from "react";
import { Link } from "react-router";
import type { Category } from "~/types";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={category.link}
      key={category.link}
    >
      <h2>{category.title}</h2>
    </Link>
  );
}
