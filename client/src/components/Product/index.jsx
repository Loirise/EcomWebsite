import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Product = ({ product }) => {
  const {
    _id: id,
    name,
    line,
    scale,
    vendor,
    description,
    quantity,
    price,
    image,
  } = product;
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => setIsShown(!isShown);

  return (
    <div className="relative rounded-lg boxshadow-outline w-full">
      <div className="w-full h-full flex xs:flex-col sm:flex-row justify-between items-center ">
        <img src={image} className="productImage" alt="product image" />
        <div className="h-full flex flex-col justify-evenly items-center gap-2">
          <h2 className="font-bold italic">{name}</h2>
          <div className="flex md:flex-col justify-center items-center gap-2 text-center">
            <p>{scale}</p>
            <p>{price} $</p>
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="border-2 rounded-md px-2 py-1 transition duration-150 hover:bg-cyan-hover"
          >
            Details
          </button>
        </div>
      </div>
      {isShown && (
        <motion.div
          className="absolute top-0 w-full h-full z-[1055] bg-black/90 backdrop-blur-sm flex flex-col gap-3"
          tabIndex={-1}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          variants={{
            hidden: { y: -100 },
            visible: { y: 0 },
          }}
        >
          {/* close icon */}
          <div className="flex justify-between">
            <button className="mt-2 ml-2 px-2 rounded border-2">
              Add to cart
            </button>
            <button
              onClick={() => setIsShown(!isShown)}
              className="transition duration-100 hover:shadow-outline mt-2 mr-2"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>
          </div>
          {/* details */}
          <div className="m-2 flex flex-col gap-1 overflow-auto">
            <h1 className="font-bold">{name}</h1>
            <h2 className="italic">by {vendor}</h2>
            <div className="flex gap-3 items-center">
              <p>{line}</p>
              <p>{scale}</p>
              <p>{price}$</p>
              <p className="text-sm italic">Stock: {quantity}</p>
            </div>
            <p className="text-sm">{description}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Product;
