import React from 'react'

const App = () => {
  return (
    <>
  
    <div className='m-10 bg-bgImage bg-no-repeat bg-cover bg-center'>
      <h1 className='uppercase underline decoration-slate-300 decoration-double underline-offset-8 italic text-center text-purple-600 font-bold text-4xl hover:text-green-800 hover:cursor-pointer bg-gray-300'>Tailwind CSS</h1>
      <p className='text-yellow-500/50 hover:text-green-600 leading-10 tracking-widest font-bold font-serif text-4xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, nemo. Aspernatur quasi vero porro blanditiis obcaecati. Placeat nihil pariatur explicabo.</p>
      <p className='ordinal'>1st</p>

      <ul className='list-disc list-inside text-white bg-second bg-no-repeat bg-contain'>
        <li>html</li>
        <li>css</li>
      </ul>





    </div>

    {/* <div className='m-10 bg-slate-600  fixed bottom-0'>
      <p className='m-8 p-5 w-1/2 h-52 border-double border-8 border-orange-500 rounded-lg bg-green-600 md:bg-black lg:bg-pink-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate nobis necessitatibus dolor quasi magni repudiandae libero tempora commodi tenetur soluta.</p>
    </div> */}


      <div className='m-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        <div className='bg-green-600'>1</div>
        <div className='bg-pink-400'>2</div>
        <div className='bg-orange-500'>3</div>
        <div className='bg-red-500'>4</div>
      </div>

      <div className='w-1/2 h-5 bg-green-600 m-10 hover:w-full transition-all ease-in-out duration-1000 '></div>

      </>
  )
}

export default App
