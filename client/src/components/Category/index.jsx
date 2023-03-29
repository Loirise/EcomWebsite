import React, { useState, useEffect } from "react";
import fetchProducts from "../../api/fetchProducts";
import Product from "../../components/Product";

const Category = ({ url }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(url).then((data) => setProducts(data));
  }, [url]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const records = products.slice(firstIndex, lastIndex);
  const npage = Math.ceil(products.length / itemsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage < numbers.length) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changeCurrentPage(id) {
    setCurrentPage(id);
  }

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap overflow-auto gap-4 justify-around mt-8">
        {records.map((product) => {
          return (
            <div className="inline border-2 rounded-lg px-2 w-full md:mx-4 product flex-[40%]">
              <Product
                name={product.name}
                line={product.line}
                scale={product.scale}
                vendor={product.vendor}
                price={product.price}
                image={product.image}
              />
            </div>
          );
        })}
      </div>
      {/* pagination */}
    </>
  );
};

export default Category;
