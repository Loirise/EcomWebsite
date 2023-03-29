import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Category from "./components/Category";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Error from "./pages/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route
            path="classiccars"
            element={
              <Category url={"http://localhost:3000/products/classiccars"} />
            }
          />
          <Route
            path="motorcycles"
            element={
              <Category url={"http://localhost:3000/products/motorcycles"} />
            }
          />
          <Route
            path="planes"
            element={<Category url={"http://localhost:3000/products/planes"} />}
          />
          <Route
            path="ships"
            element={<Category url={"http://localhost:3000/products/ships"} />}
          />
          <Route
            path="trains"
            element={<Category url={"http://localhost:3000/products/trains"} />}
          />
          <Route
            path="trucksandbuses"
            element={
              <Category url={"http://localhost:3000/products/trucksandbuses"} />
            }
          />
          <Route
            path="vintagecars"
            element={
              <Category url={"http://localhost:3000/products/vintagecars"} />
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
