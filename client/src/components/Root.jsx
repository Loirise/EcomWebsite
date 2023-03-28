import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Categories from "./Categories";
import Navbar from "./Navbar";

const Root = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar isTopOfPage={isTopOfPage} />
      <div className="mx-auto mb-16 w-[95%] md:w-5/6 min-h-[785px] h-auto flex flex-col xl:flex-row gap-8 justify-between items-center rounded-lg bg-white/20 backdrop-blur-sm">
        <Categories />
        <div className="w-full flex justify-center xl:w-4/5 h-full">
          <div className="w-full flex flex-col justify-around xl:py-32">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Root;
