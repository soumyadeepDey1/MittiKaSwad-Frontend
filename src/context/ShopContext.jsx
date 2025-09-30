import { useState } from "react";
import { products } from "../assets/assets.js";
import { ShopContext } from "./CreateContext.jsx";

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const deliveryCharge = 10;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);

    const value ={
        products,
        currency,
        deliveryCharge,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}