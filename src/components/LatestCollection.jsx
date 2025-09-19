import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title'

const LatestCollection = () => {
    const {products} = useContext(ShopContext)
    const [latestProducts,setLatestProduct] = useState([])

    useEffect(()=>{
        setLatestProduct(products.slice(0,10))
    },[products])

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTION'} />
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Discover our latest collection of handmade food products, crafted with care and passion.</p>
        </div>
    </div>
  )
}

export default LatestCollection