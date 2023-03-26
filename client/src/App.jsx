import { useEffect, useState } from "react";
import listProducts from "./api/listProducts";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    listProducts().then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <div>
        {products.map((product) => {
          return <div>{product.name}</div>;
        })}
      </div>
    </div>
  );
}

export default App;
