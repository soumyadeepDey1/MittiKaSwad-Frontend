import { products } from "../assets/assets.js";
import { ShopContext } from "./CreateContext.jsx";

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