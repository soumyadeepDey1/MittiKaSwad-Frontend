import React, { useContext } from 'react'
import { ShopContext } from '../context/CreateContext'
import { Link } from 'react-router-dom'
const ProductItem = ({_id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <>
        <Link to={`/product/${_id}`} className='text-gray-700 cursor-pointer ' > 
        <div className='overflow-hidden'>
            <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt="" />
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='iceberg-regular'>{currency}{price}</p>
        </div>
        </Link>
    </>
  )
}

export default ProductItem