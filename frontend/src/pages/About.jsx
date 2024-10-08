import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'About'} text2={'Us'}/>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
        <p>At Forever, we believe fashion is more than just clothing – it’s an expression of individuality. Founded with a passion for creativity and quality, our brand offers trendy, comfortable, and affordable styles for everyone. Whether you’re looking for casual wear, chic outfits, or something unique, we’ve got you covered.</p>
        <p>Our mission is to help you look and feel your best, while staying true to your style. Explore our collection and discover how you can make every day fashionable with us!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Our mission at Forever is to empower individuals through fashion. We aim to provide high-quality, stylish, and affordable clothing that allows everyone to express their unique personality and confidence. By blending creativity with comfort, we strive to create fashion that inspires self-expression and fosters inclusivity, ensuring that everyone feels represented and valued</p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance:</b>
          <p className=' text-gray-600'>Our products are crafted with the finest materials, ensuring durability, comfort, and style. We are committed to delivering exceptional quality that exceeds your expectations with every purchase.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience: </b>
          <p className=' text-gray-600'>We prioritize your convenience by offering an easy shopping experience, fast delivery, and hassle-free returns. Our goal is to make fashion accessible and effortless for you, every step of the way.</p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className=' text-gray-600'>Our customer service team is dedicated to providing prompt, friendly, and helpful support. We are here to assist you with any questions or concerns, ensuring a smooth and satisfying shopping experience.</p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About
