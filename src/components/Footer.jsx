import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div >
        
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm font-medium'>
            <hr className='flex flex-col sm:hidden' />
            <div>
                <img src={assets.logo} className='w-45 mb-5' alt="" />
                <p className='w-full md:w-2/3 text-gray-600 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div>
                <p className='text-xl mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='text-xl mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>&#9990; +91-993-251-6087</li>
                    <li>&#9993; soumyadeepdey098@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className='bg-gray-600 text-amber-100 mb-3'>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2025@ mittikaswad.com - All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer