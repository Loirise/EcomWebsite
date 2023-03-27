import React from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto w-5/6 flex gap-8 justify-between items-center rounded-lg bg-white/20 backdrop-blur-sm h-[80vh]">
        <Categories />
        <div className="w-4/5 h-full">
          <div className="h-[95%]">
            <Outlet />
          </div>
          <div className="">
            <ul className="flex items-center justify-end mr-8 gap-8">
              <li className="border-2 px-2">1</li>
              <li className="border-2 px-2">2</li>
              <li className="border-2 px-2">3</li>
              <li className="border-2 px-2">...</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
