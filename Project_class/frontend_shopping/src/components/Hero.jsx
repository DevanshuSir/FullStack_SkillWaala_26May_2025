import React from 'react'

const Hero = () => {
  return (
<section className='bg-gradient-to-r from-purple-100 via-white to-white px-6 py-12 md:flex items-center justify-between max-w-7xl mx-auto rounded-xl mt-28 border-2'>
    <div className='md:w-1/2 space-y-4'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800'>Fast Delivery..🚀</h1>
        <p className='text-gray-800'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A cum explicabo doloribus eius quaerat. Soluta debitis aspernatur delectus adipisci. Accusamus?</p>
        <button className='mt-4 bg-purple-500 hover:bg-purple-700 px-4 py-2 rounded-lg text-white'>Shop Now</button>
    </div>
    <div className='md:w-1/2 mt-8 md:mt-0'>
        <img src="https://img.freepik.com/premium-photo/diwalis-essence-is-captured-every-glowing-diya-every-shared-sweet-every-joyful-moment-with-family-friends_1222399-37347.jpg?semt=ais_hybrid&w=740&q=80" alt="" className='w-full max-w-md mx-auto rounded-2xl' />
    </div>
</section>
  )
}

export default Hero
