import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../shared/categories";

const Categories = () => {
  return (
    <div className="w-1/5 border-r-2 h-full">
      <ul className="h-full flex flex-col gap-8 justify-evenly items-center">
        {categories.map((category) => {
          return (
            <li
              className="hover:underline hover:underline-offset-8"
              key={category.toLowerCase().replace(/ /g, "")}
            >
              <a href={`/products/${category.toLowerCase().replace(/ /g, "")}`}>
                {category}
              </a>
              {/* <Link
                to={`/products/${category.toLowerCase().replace(/ /g, "")}`}
              >
                {category}
              </Link> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
