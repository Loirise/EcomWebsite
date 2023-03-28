import React, { useEffect, useState } from "react";
import listProducts from "../api/listProducts";
import Product from "./Product";

const ListProducts = ({ url, home = false }) => {
  if (home) {
    return (
      <div className="w-1/2 mx-auto h-[500px] xl:w-5/6 xl:h-full">
        <h1 className="font-bold mb-4 text-2xl">Welcome to our shop</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates
          cum cumque aspernatur itaque velit. Laudantium rem dolore provident
          iusto, maxime fuga itaque corrupti autem recusandae, consequatur
          pariatur suscipit, repellat doloribus.
        </p>
      </div>
    );
  }

  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts(url).then((data) => setProducts(data));
    setCurrentPage(1);
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
      <div className="xl:mr-8">
        <div className="flex flex-col 2xl:flex-row flex-wrap mx-2 gap-4 overflow-auto">
          {records.map((product) => {
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
                  image={product.image}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-8 mb-4 mx-auto">
        <ul className="flex flex-wrap items-center justify-end mr-8 gap-1 sm:gap-4 md:gap-6 xl:gap-8">
          <li className="border-2 px-2 hover:bg-cyan-500">
            <a href="#" onClick={prevPage}>
              Prev
            </a>
          </li>

          {numbers.map((n, i) => {
            return (
              <li
                className={`border-2 hover:bg-cyan-500 ${
                  currentPage === n ? "bg-cyan-700" : ""
                }`}
                key={i}
              >
                <a
                  href="#"
                  className="px-2"
                  onClick={() => changeCurrentPage(n)}
                >
                  {n}
                </a>
              </li>
            );
          })}

          <li className="border-2 px-2 hover:bg-cyan-500">
            <a href="#" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ListProducts;
