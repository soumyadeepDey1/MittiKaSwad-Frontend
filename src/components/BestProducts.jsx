import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/CreateContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
const BestProducts = () => {
  const { products } = useContext(ShopContext);
  const [bestProduct, setBestProduct] = useState([]);

  useEffect(() => {
    const filteredProducts = products.filter(
      (product) => product.bestseller === true
    );
    setBestProduct(filteredProducts.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"PRODUCTS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Discover our latest collection of handmade food products, crafted with
          care and passion.
        </p>
      </div>
      {/** Rendering Products  **/}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestProduct.map((item, index) => (
          <ProductItem
            key={index}
            _id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestProducts;
