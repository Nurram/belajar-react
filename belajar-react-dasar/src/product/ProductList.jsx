import { useImmer } from "use-immer";
import Product from "./Product";
import { useEffect, useRef, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useImmer([]);
  const [load, setLoad] = useState(false);

  function handleClick() {
    setLoad(true);
  }

  useEffect(() => {
    async function fetchProduct() {
      const response = await fetch("/products.json");
      const json = await response.json();
      setProducts(json);
    }

    if (load) {
      fetchProduct();
    }

    return () => {
      console.info("Product List Componen Unmounted");
    };
  }, [load]);

  useEffect(() => {
    console.info("Call use effect with []");
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={handleClick}>Load Products</button>
      {products.map((product) => {
        return <Product product={product} key={product.id} />;
      })}
    </div>
  );
}
