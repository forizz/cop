import React from "react";

import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

import { quizes } from "~/shared/data";

function Breadcrumbs() {
  const breadcrumbs = [
    {
      link: "/",
      label: "Home",
    },
    {
      link: "/categories",
      label: "Categories",
    },
    {
      link: `/quiz/${quizes[0].id}`,
      label: quizes[0].title,
    },
  ];

  return (
    <ol className="mb-4 flex">
      {breadcrumbs.map((crumb, index) => (
        <li
          key={crumb.link}
          className="flex items-center"
        >
          <Link
            to={crumb.link}
            className="text-primary hover:underline"
          >
            {crumb.label}
          </Link>
          {index !== breadcrumbs.length - 1 && (
            <ChevronRight className="mx-2" />
          )}
        </li>
      ))}
    </ol>
  );
}

export { Breadcrumbs };
