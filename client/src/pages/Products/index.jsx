import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
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
      <div className="xs:w-[95%] xl:w-5/6 h-fit min-h-[75vh] mx-auto bg-white/20 backdrop-blur-sm rounded-lg flex flex-col md:flex-row justify-between">
        <div className="md:w-1/5 md:py-0 pb-4 border-b-2 md:border-b-0 md:border-r-2 my-auto">
          <div className="flex md:flex-col flex-wrap gap-8 justify-evenly items-center sm:text-xl md:text-2xl">
            {categories.map((category) => {
              const cat = category.toLowerCase().replace(/ /g, "");
              return (
                <Link
                  className={`${hoverEffect}`}
                  to={`/products/${cat}`}
                  key={categories.indexOf(category)}
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="md:w-4/5 h-full my-2 md:my-0">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Products;
