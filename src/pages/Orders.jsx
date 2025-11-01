import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/CreateContext";
import Title from "../components/Title";

const Orders = () => {
  const { cartItems, currency, products } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);
    useEffect(() => {
      const tempData = [];
      for (const items in cartItems) {
        for (const item in cartItems[items]) {
          if (cartItems[items][item] > 0) {
            tempData.push({
              _id: items,
              size: item,
              quantity: cartItems[items][item],
            });
          }
        }
      }
      setOrderData(tempData);
     
      // console.log(cartData);
    }, [cartItems]);
  
  return (
    <div className="border-t pt-16">
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div>
        {orderData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          )
          return (
          <div
            key={index}
            className="py-5 border border-gray-100 px-4  my-3 rounded-2xl shadow-md hover:shadow-2xl text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
          >
            <div className="flex items-start gap-6 text-sm">
              <img className="w-16 sm:w-22 rounded" src={productData.image[0]} alt="" />
              <div className="text-gray-600">
                <p className="sm:text-base font-medium">{productData.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base text-gray-500">
                  <p className="iceberg-regular text-lg">
                    {currency}
                    {productData.price * item.quantity}
                  </p>
                  <p className="iceberg-regular">{item.quantity}</p>
                  <p className="iceberg-regular">{item.size}</p>
                </div>
                <p>
                  Date: <span className="text-gray-500">10, Oct,2025</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-between">
              <div className="flex items-center gap-2">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p className="text-sm md:text-base text-gray-600">Order Placed</p>
              </div>
              <button className="border px-4 py-2 text-sm font-medium rounded-sm border-gray-400 text-gray-500 active:bg-slate-700 active:text-amber-50 cursor-pointer">Track Order</button>
            </div>
          </div>
        )
      })}
        {
          orderData.length === 0 && <p className="text-gray-500 text-center py-10">No items in the orders</p>
        }
      </div>
    </div>
  );
};

export default Orders;
