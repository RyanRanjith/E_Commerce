import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
    event.preventDefault();
    }
  return (
    <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, vitae dolore. Nesciunt porro omnis esse totam. Maxime ipsum sed voluptatum totam illo nostrum, ea laboriosam autem facere harum et voluptatibus?</p>
        <form onSubmit={onSubmitHandler} className='w-ful sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded-md'>
            <input className='w-full sm:flex-1 outline-none ' type="email" placeholder='Enter Your Email' required />
            <button className='bg-black text-white text-xs px-10 py-4 rounded-md' type='submit'>Subscribe</button>
        </form>     
    </div>
  )
}

export default NewsletterBox
