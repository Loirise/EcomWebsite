import React from "react";
import { Link } from "react-router-dom";
import { categories } from "../shared/categories";

const Categories = () => {
  return (
    <div className="h-1/5 xl:w-1/5 xl:h-full flex-wrap mx-2 py-8 border-b-2 xl:border-b-0 xl:border-r-2 ">
      <ul className="xl:h-full flex flex-wrap xl:flex-col gap-8 justify-evenly items-center">
        {categories.map((category) => {
          return (
            <li
              className="hover:underline hover:underline-offset-8"
              key={category.toLowerCase().replace(/ /g, "")}
            >
              {/* <a href={`/products/${category.toLowerCase().replace(/ /g, "")}`}>
                {category}
              </a> */}
              <Link
                to={`/products/${category.toLowerCase().replace(/ /g, "")}`}
              >
                {category}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
