import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] rounded-2xl shadow-2xl' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center item-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>721435,Dantan <br /> Paschim Medinipur , India</p>
          <p className='text-gray-500'>Tel: +919932516087 <br /> Email: soumyadeepdey098@gmail.com</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Contact