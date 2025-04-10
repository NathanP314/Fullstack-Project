import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'

{/* Display About Us (company) Info */}

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[200px]' src={assets.about_img} alt="" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>Since 2025, Bandit Tees has offered a great selection of rock band shirts at significantly reduced prices. Our goal is to offer you the best deal. Competitors often upcharge merchandise from popular bands but we stick to our principles and maintain the best bang for your buck.</p>
              <p>We work to ensure the highest quality products are safely and securely shipped to your door at a lower cost than competitors. With a great diversity of products, we are here to serve you!</p>
              <b className='text-gray-800'>Our Mission</b>
              <p>Our mission at Bandit Tees is to deliver the highest quality products at the lowest prices. We believe self-expression should be easily-accesible to everyone.</p>
          </div>
      </div>
    </div>
  )
}

export default About