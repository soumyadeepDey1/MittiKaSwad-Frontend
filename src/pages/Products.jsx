import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/CreateContext";
import { assets } from "../assets/assets.js";
import RelatedProduct from "../components/RelatedProduct.jsx";
const Products = () => {
  const { productId } = useParams();
  // console.log(productId);
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [quantity, setQuantity] = useState("");
  const [activeButton, setActiveButton] = useState("description");
  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };
  const getProductData = async () => {
    await products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        setQuantity(item.sizes[0]);
        // console.log(item);
        return null;
      }
    });
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    getProductData();
  }, [productId]);
  // useEffect(() => {
  //   if (productData && productData.sizes) {
  //     setQuantity(productData.sizes[0]);
  //   }
  // }, [productData]);
  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100 ">
      {/* Product Data */}
      <div className="flex gap-12 sm:flex-row flex-col sm:gap-12">
        {/* Product Image */}
        <div className="flex-[1.3] flex flex-col-reverse gap-3 sm:flex-row ">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[14.7%] w-full  ">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                alt=""
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer hover:scale-95 rounded-2xl shadow-md"
              />
            ))}
          </div>
          <div className="w-full sm:w-[70%]">
            <img
              className="w-full h-auto hover:scale-104 transition duration-300 rounded-2xl shadow-2xl"
              src={image}
              alt=""
            />
          </div>
        </div>
        {/* Product Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_icon} alt="" />
            <img className="w-3" src={assets.star_dull_icon} alt="" />
            <p className="pl-2 iceberg-regular">122</p>
          </div>
          <p className="iceberg-regular text-3xl mt-5 font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Quantity</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setQuantity(item)}
                  className={`iceberg-regular border-2 border-gray-200 py-2 px-4 bg-gray-100 ${
                    item === quantity ? "border-orange-500 border-2" : ""
                  } cursor-pointer`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <button onClick={() => addToCart(productData._id, quantity)} className="bg-amber-700 text-amber-50 px-5 py-3 text-sm active:bg-amber-500 cursor-pointer">
            ADD TO CART
          </button>
          <hr className="mt-4 sm:w-4/5 border-gray-200 border " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-2">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-20 border border-gray-100  rounded-2xl p-5 shadow-2xl">
        <div className="flex border-b border-gray-400 gap-4">
          <button
            onClick={() => handleButtonClick("description")}
            className={` px-5 py-3 text-sm  ${
              activeButton === "description"
                ? " border-b-2 border-b-gray-700 text-shadow-md font-semibold"
                : ""
            }`}
          >
            Description
          </button>
          <button
            onClick={() => handleButtonClick("reviews")}
            className={` px-5 py-3 text-sm  ${
              activeButton === "reviews"
                ? " border-b-2 border-b-gray-700 text-shadow-md font-semibold"
                : ""
            }`}
          >
            Reviews
          </button>
        </div>
        <div className="flex flex-col mt-4 text-sm gap-4 text-gray-700 shadow-lg p-3 rounded-2xl">
          {activeButton === "description" ? (
            <div className="flex flex-col p-1 gap-3 hover:scale-101 duration-300">
              <p>
                This is a Homemade Grocery & Village Handcrafted Product
                E-commerce Platform. It brings together local farmers, artisans,
                and small-scale producers with customers through a
                well-structured online marketplace. The platform offers a wide
                range of organic groceries and handmade village items, making it
                simple and convenient for users to discover and purchase
                authentic, natural products.
              </p>
              <p>
                Beyond shopping, the platform empowers local communities by
                giving them digital access to a wider audience, supporting
                sustainable living and promoting traditional craftsmanship.
              </p>
            </div>
          ) : (
            <>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “Fresh, organic, and authentic — every product feels like it’s
                straight from the village to my kitchen!”
              </p>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “I love the variety of products available. It’s like having a
                farmer’s market at my fingertips!”
              </p>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “The quality is outstanding, and I appreciate the sustainable
                practices of the sellers.”
              </p>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “Shopping here supports local communities, and I feel good about
                my purchases.”
              </p>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “The handmade items are unique and beautifully crafted. I always
                find something special.”
              </p>
              <p className="shadow-md p-2 rounded-xl hover:scale-102 duration-300">
                “Customer service is top-notch. They really care about their
                customers and products.”
              </p>
            </>
          )}
        </div>
      </div>
      {/* Display related products */}
      <div>
        <RelatedProduct
          category={productData.category}
          subCategory={productData.subCategory}
          _id={productData._id}
        />
      </div>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Products;
