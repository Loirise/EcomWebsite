import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto mb-32 w-[95%] md:w-5/6 h-auto flex flex-col xl:flex-row gap-8 justify-between items-center rounded-lg bg-white/20 backdrop-blur-sm">
        <Categories />
        <div className="w-full flex justify-center xl:w-4/5 h-full">
          <div className="w-full flex flex-col justify-around md:py-32">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
