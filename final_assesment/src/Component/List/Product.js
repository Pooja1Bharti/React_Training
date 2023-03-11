import React, { useState, useEffect } from "react";
import "./styles.css";
import Axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await Axios.get(
      "https://jsonplaceholder.typicode.com/photos"
    );
    const products = data;
    setProducts(products);
    console.log(products);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}

export default Product;
