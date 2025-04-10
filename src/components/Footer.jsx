import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

    {/* Display Footer */}

  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Bandit Tees is committed to serving you with the highest quality and lowest cost rock band merchandise. For 2025 and beyond, consider us your one-stop shop for all rock band shirts.
                </p>
            </div>
            <div>
                <p className='mt-10 text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div>
                <p className='mt-10 text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1-806-000-0000</li>
                    <li>contact&bandittees.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>
                Copyright 2025@ Bandittees.com - All Rights Reserved.
            </p>
        </div>

    </div>
  )
}

export default Footer