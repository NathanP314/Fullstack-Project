import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

{/* Display Contact Info */}

const Contact = () => {
  return (
    <div>
        <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
            <img className='w-full md:max-w-[210px]' src={assets.logo} alt="" />
            <img className='w-full md:max-w-[210px]' src={assets.about_img} alt="" />
            <div className='flex flex-col justify-center items-start gap-6'>
              <p className='font-semibold text-xl text-gray-700'>Telephone</p>
              <p>806-000-000</p>
              <br />
              <p className='font-semibold text-xl text-gray-700'>Email</p>
              <p>contact@bandittees.com</p>
            </div>
        </div>
    </div>
  )
}

export default Contact