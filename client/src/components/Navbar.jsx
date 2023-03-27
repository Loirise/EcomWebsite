import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const Navbar = () => {
  const flexBetween = "flex items-center justify-between";
  const hoverEffect =
    "transition duration-300 hover:text-gray-400 hover:underline hover:underline-offset-8";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState(false);

  return (
    <nav className="mb-32">
      <div className={`${flexBetween} fixed top-0 z-40 w-full py-4 text-white`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img src="#" alt="Logo" />
            {/* right side */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} gap-8`}>
                <Link to={"/"} className={`${hoverEffect}`}>
                  Home
                </Link>
                <Link to={"#"} className={`${hoverEffect}`}>
                  Login
                </Link>
                <Link to={"#"} className={`${hoverEffect}`}>
                  Register
                </Link>
                <Link to={"#"} className={`${hoverEffect}`}>
                  Cart
                </Link>
              </div>
            ) : (
              <div>
                <button
                  className="rounded-full p-2 border-2 border-transparent transition duration-300 hover:border-white"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* mobile menu modal */}
      {!isAboveMediumScreens && isMenuToggled && (
        <motion.div
          className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-slate-500 drop-shadow-xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.3 }}
          variants={{
            hidden: { x: 100 },
            visible: { x: 0 },
          }}
        >
          {/* closing icon */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className={`h-6 w-6 text-white ${hoverEffect}`} />
            </button>
          </div>
          {/* menu items */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl text-white">
            <Link to={"/"} className={`${hoverEffect}`}>
              Home
            </Link>
            <Link to={"/products"} className={`${hoverEffect}`}>
              Products
            </Link>
            <Link to={"/"} className={`${hoverEffect}`}>
              Home2
            </Link>
            <Link to={"/products"} className={`${hoverEffect}`}>
              Products2
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
