import React, { useEffect, useState } from "react";
import listProducts from "../api/listProducts";
import Product from "./Product";

const ListProducts = ({ url }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts(url).then((data) => setProducts(data));
  }, []);

  return (
    <div className="flex flex-wrap gap-4 mr-8 mt-4">
      {products.map((product) => {
        return (
          <div
            className="inline border-2 px-4 py-2 flex-[40%]"
            key={product.name.toLowerCase().replace(/ /g, "")}
          >
            <Product
              name={product.name}
              line={product.line}
              scale={product.scale}
              vendor={product.vendor}
              price={product.price}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ListProducts;
