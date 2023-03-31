import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import useMediaQuery from "../../hooks/useMediaQuery";
import { useLogout } from "../../hooks/useLogout";

const Navbar = () => {
  const { logout } = useLogout();
  const handleClick = () => {
    logout();
  };
  const navLinkClass = ({ isActive }) =>
    isActive ? `active ${hoverEffect}` : `${hoverEffect}`;
  const hoverEffect =
    "transition duration-300 hover:underline underline-offset-8 decoration-2";
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="mb-24">
      <div className={`${flexBetween} fixed top-0 z-40 w-full py-3`}>
        <div className={`${flexBetween} w-5/6 mx-auto`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* outer-left */}
            <img src="#" alt="Logo" />
            {/* outer-right */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* inner-left */}
                <div className={`${flexBetween} gap-8`}>
                  <NavLink to={"/"} className={navLinkClass}>
                    Home
                  </NavLink>
                  <NavLink to={"/products"} className={navLinkClass}>
                    Products
                  </NavLink>
                  <NavLink to={"/about"} className={navLinkClass}>
                    About
                  </NavLink>
                </div>
                {/* inner-right */}
                <div className={`${flexBetween} gap-8 text-xl`}>
                  <button
                    className="shadow-outline rounded px-3 py-1 transition duration-100 hover:bg-cyan-hover"
                    onClick={handleClick}
                  >
                    Logout
                  </button>
                  <NavLink to={"/login"} className={navLinkClass}>
                    Login
                  </NavLink>
                  <NavLink to={"/register"} className={navLinkClass}>
                    Register
                  </NavLink>
                  <NavLink to={"/cart"} className={navLinkClass}>
                    Cart
                  </NavLink>
                </div>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full p-2 hover:shadow-outline"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black/90 backdrop-blur-sm drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 0.1 }}
          variants={{
            hidden: { x: 100 },
            visible: { x: 0 },
          }}
        >
          {/* close icon */}
          <div className="flex justify-end p-12">
            <button
              onClick={() => setIsMenuToggled(!isMenuToggled)}
              className="transition duration-100 hover:shadow-outline"
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className={"ml-[33%] flex flex-col gap-10 text-2xl items-start"}>
            <NavLink to={"/"} className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to={"/products"} className={navLinkClass}>
              Products
            </NavLink>
            <NavLink to={"/about"} className={navLinkClass}>
              About
            </NavLink>
            <NavLink to={"/login"} className={navLinkClass}>
              Login
            </NavLink>
            <NavLink to={"/register"} className={navLinkClass}>
              Register
            </NavLink>
            <NavLink to={"/cart"} className={navLinkClass}>
              Cart
            </NavLink>
            <button
              className="shadow-outline rounded px-3 py-1 transition duration-100 hover:bg-cyan-hover"
              onClick={handleClick}
            >
              Logout
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
