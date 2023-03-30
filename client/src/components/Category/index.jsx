import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import fetchProducts from "../../api/fetchProducts";
import Product from "../../components/Product";

const Category = ({ url }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts(url).then((data) => setProducts(data));
    changeCurrentPage(1);
  }, [url]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
      <div className="flex flex-col mx-auto w-5/6 xl:w-[95%] xl:flex-row flex-wrap overflow-auto gap-4 justify-around mt-8">
        {records.map((product) => {
          return (
            <div
              className="inline border-2 rounded-lg p-2  w-full  product flex-[40%]"
              key={products.indexOf(product)}
            >
              <Product product={product} />
            </div>
          );
        })}
      </div>
      {/* pagination */}
      <nav className="w-[95%] mx-auto flex justify-center mt-8 ">
        <ul className="flex gap-4 pagList flex-wrap">
          <li>
            <NavLink onClick={prevPage}>Prev</NavLink>
          </li>
          {numbers.map((n, i) => {
            return (
              <li className={currentPage === n ? "activePage" : ""} key={i}>
                <NavLink onClick={() => changeCurrentPage(n)}>{n}</NavLink>
              </li>
            );
          })}
          <li>
            <NavLink onClick={nextPage}>Next</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Category;
