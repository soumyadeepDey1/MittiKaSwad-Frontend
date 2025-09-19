import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
const ProductItem = ({id,image,name,price}) => {
    const {currency} = useContext(ShopContext)
  return (
    <>
        <Link to={`/product/${id}`} > 
        <div>
            <img src="" alt="" />
        </div>
        </Link>
    </>
  )
}

export default ProductItem