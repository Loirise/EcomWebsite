import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  const navLinkClass = ({ isActive }) =>
    isActive ? `active ${hoverEffect}` : `${hoverEffect}`;

  const hoverEffect =
    "transition duration-300 hover:underline underline-offset-8 decoration-2";
  const categories = [
    "Classic Cars",
    "Motorcycles",
    "Planes",
    "Ships",
    "Trains",
    "Trucks and Buses",
    "Vintage Cars",
  ];

  return (
    <>
      <div className="xs:w-[95%] xl:w-5/6 h-full min-h-[75vh] mx-auto py-6 mb-6 bg-white/20 backdrop-blur-sm rounded-lg flex flex-col md:flex-row justify-between">
        <div className="md:w-1/5 py-4 md:py-0 border-y-2 md:border-y-0 md:border-r-2 my-auto">
          <div className="flex md:flex-col flex-wrap gap-8 justify-evenly items-center sm:text-xl md:text-2xl">
            {categories.map((category) => {
              const cat = category.toLowerCase().replace(/ /g, "");
              return (
                <NavLink
                  className={navLinkClass}
                  to={`/products/${cat}`}
                  key={categories.indexOf(category)}
                >
                  {category}
                </NavLink>
              );
            })}
          </div>
        </div>
        <div className="md:w-4/5 h-full relative my-auto flex flex-col justify-between items-center ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;
