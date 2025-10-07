import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/CreateContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { toast } from "react-toastify";
const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);
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
    setCartData(tempData);
    // console.log(cartData);
  }, [cartItems]);

  return (
    <div className="border-t border-t-gray-400 pt-14 ">
      <div className="text-2xl mb-3">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>
      <div >
        {cartData.map((item, index) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={index}
              className="py-4 px-4 my-3 rounded-2xl shadow-2xl text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4 bg-slate-50 border border-gray-100"
            >
              <div className="flex items-center gap-6">
                <img
                  className="w-16 sm:w-26 rounded"
                  src={productData.image[0]}
                  alt=""
                />
                <div>
                  <p className="text-md sm:text-xl font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2 text-gray-500">
                    <p className="iceberg-regular">{currency}{productData.price}</p>
                    <p className="iceberg-regular px-2 sm:px-3 sm:py-1 border border-gray-300 bg-slate-50 rounded">{item.size}</p>
                  </div>
                </div>
              </div>
              <input onChange={(e)=> e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))} className="iceberg-regular border border-gray-300 max-w-10 sm:max-w-15 px-1 sm:px-2 py-1 text-center text-gray-500 rounded hover:border-gray-500 hover:text-gray-800" type="number" min={1} defaultValue={item.quantity} />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
            </div>
          );
        })
        }
        {
          cartData.length === 0 && <p className="text-gray-500 text-center py-10">No items in the cart</p>
        }
      </div>
      <div className="flex justify-end my-20 ">
        <div className="w-full sm:w-[450px]">
            <CartTotal/>
            <div className="w-full text-end">
              <button onClick={()=>cartData.length===0 ? toast.warning('Cart Amout is Zero (0)') : navigate('/place-order')} className="border bg-slate-500 text-amber-50 text-sm my-8 px-8 py-3 cursor-pointer active:bg-slate-100 active:text-slate-800 active:border-slate-800  rounded shadow-2xl">PROCEED TO CHECKOUT</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
