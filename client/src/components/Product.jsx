import React from "react";

const Product = ({ name, line, scale, vendor, price }) => {
  return (
    <div className="rounded-lg h-[250px] boxshadow-outline w-full">
      <div className="w-full h-full flex justify-between items-center gap-4">
        <div className="h-full flex flex-col justify-evenly ml-8">
          <h2>{name}</h2>
          <p>{line}</p>
          <p>{scale}</p>
          <p>{vendor}</p>
          <p>{price} $</p>
        </div>
        <img src="#" alt="product image" />
      </div>
    </div>
  );
};

export default Product;
