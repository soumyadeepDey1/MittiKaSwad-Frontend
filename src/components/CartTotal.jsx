import React, { useContext } from 'react'
import { ShopContext } from '../context/CreateContext'
import Title from './Title';

const CartTotal = () => {
    const {currency, deliveryCharge, getCartAmount} = useContext(ShopContext);

  return (
    <div className='w-full'>
        <div className='text-2xl px-3'>
            <Title text1={'CART'} text2={'TOTAL'} />
        </div>
        <div className='flex flex-col gap-2 mt-2 text-md border border-gray-100 rounded-xl shadow-2xl p-5'>
            <div className='flex justify-between'>
                <p>SUBTOTAL</p>
                <p className='iceberg-regular'>{currency}{getCartAmount()}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>DELIVERY CHARGE</p>
                <p className='iceberg-regular'>{currency}{getCartAmount() === 0 ? 0 : deliveryCharge}.00</p>
            </div>
            <hr />
            <div className='flex justify-between '>
                <b>TOTAL</b>
                <b className='iceberg-regular'>{currency}{ getCartAmount() === 0 ? 0 : getCartAmount() + deliveryCharge}.00</b>
            </div>
        </div>
        <div></div>
    </div>
  )
}

export default CartTotal