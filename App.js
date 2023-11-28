import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./pages/ProductsPage";

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/product" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
