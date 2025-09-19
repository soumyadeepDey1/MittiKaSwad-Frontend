import { createContext } from "react";
import { products } from "../assets/assets.js";
export const ShopContext = createContext();

export const ShopContextProvider = (props) => {

    const currency = '₹';
    const deliveryCharge = 10;

    const value ={
        products,
        currency,
        deliveryCharge
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}