import { useState } from "react";
import { products } from "../assets/assets.js";
import { ShopContext } from "./CreateContext.jsx";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContextProvider = (props) => {
  const currency = "₹";
  const deliveryCharge = 30;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();
  const addToCart = async (ItemId, quantity) => {
    // if (!quantity) {
    //     toast.error("Quantity not specified");
    //     return;
    // }
    let cartData = structuredClone(cartItems);
    if (cartData[ItemId]) {
      if (cartData[ItemId][quantity]) {
        cartData[ItemId][quantity] += 1;
      } else {
        cartData[ItemId][quantity] = 1;
      }
    } else {
      cartData[ItemId] = {};
      cartData[ItemId][quantity] = 1;
    }
    setCartItems(cartData);
    toast.success("Item added to cart");
  };
  const getCartCount = () => {
    let count = 0;
    for (const items in cartItems) {
      for (const size in cartItems[items]) {
        try {
          if (cartItems[items][size] > 0) {
            count += cartItems[items][size];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return count;
  };
  const updateQuantity = async (ItemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[ItemId][size] = quantity;
    setCartItems(cartData);
  };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
    return totalAmount;
  };
  
  // useEffect(() => {
  //     console.log(cardItems);
  // }, [cardItems]);
  const value = {
    products,
    currency,
    deliveryCharge,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
