import React from "react";

const Product = ({ name, line, scale, vendor, price, image }) => {
  return (
    <div className="rounded-lg boxshadow-outline w-full">
      <div className="w-full h-full flex xs:flex-col sm:flex-row justify-between items-center gap-4">
        <div className="h-full flex flex-wrap sm:flex-col justify-evenly ml-8">
          <h2 className="font-bold italic">{name}</h2>
          <p>{scale}</p>
          <p className="italic">{vendor}</p>
          <p>{price} $</p>
        </div>
        <img src={image} className="productImage" alt="product image" />
      </div>
    </div>
  );
};

export default Product;
