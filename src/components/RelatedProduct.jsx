import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/CreateContext'
import Title from './Title'
import ProductItem from './ProductItem'
const RelatedProduct = ({category,subCategory,_id}) => {
    const { products } = useContext(ShopContext);
    const [relatedProducts, setRelatedProducts] = useState([]);
    useEffect(()=>{
        if(products.length>0){
            setTimeout(() => {
            let productCopy = products.slice();
            productCopy = productCopy.filter((item)=>(item.category===category) );
            productCopy = productCopy.filter((item)=>(item.subCategory===subCategory) );
            productCopy = productCopy.filter((item)=>(item._id!==_id));
            setRelatedProducts(productCopy.slice(0,5));
            }, 400);
        }
    },[products,_id])

  return (
    <div className='my-24'>
        <div className=' text-3xl py-2'>
            <Title text1={"Related"} text2={"Products"}/>
        </div>
        <div className='grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
            {relatedProducts.map((item,index)=>(
                <ProductItem key={index} _id={item._id} name={item.name} price={item.price} image={item.image} />
            ))}
            {
                relatedProducts.length===0 && <p className='text-center col-span-full text-gray-500'>No Related Products Found</p>
            }
        </div>
    </div>
  )
}

export default RelatedProduct