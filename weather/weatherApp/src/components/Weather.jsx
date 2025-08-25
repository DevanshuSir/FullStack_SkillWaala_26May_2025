import React from 'react'

const Weather = () => {
  return (
    <div className='min-h-screen bg-weather_bg bg-cover bg-no-repeat flex flex-col items-center justify-center'>
      <div className='w-full max-w-md bg-black bg-opacity-70 rounded-xl shadow-2xl p-8 text-white'>
        <h1 className='text-4xl font-bold text-center mb-7 '>Weather App 🌎</h1>
        <div className='flex flex-col gap-6'>
          <input type="text"
          placeholder='Enter City Name...'
          name="" id="" className='p-2 rounded-xl text-black focus:outline-none shadow-inner' />
          <button className='bg-green-100 text-black font-bold py-2 rounded-xl hover:bg-indigo-500 hover:text-white'>Search Weather 🔍</button>
        </div>
        <div className='text-center mt-7'>
          <img src="https://cdn-icons-png.flaticon.com/512/4188/4188714.png" alt="" className='w-24 h-24 mx-auto animate-bounce drop-shadow-lg' />
          <h2 className='text-3xl font-bold'>Jaipur / IN</h2>
          <p className='text-xl'>Cloud</p>
          <p className='text-5xl font-bold mt-2'>32 °C</p>
        </div>
        <div className='grid grid-cols-3 gap-3 text-center mt-7'>
          <div className='bg-white text-black opacity-50 rounded-xl p-2'>
            <p className='font-bold'>Humidity</p>
            <p>22%</p>
          </div>
          <div className='bg-white text-black opacity-50 rounded-xl p-2'>
            <p className='font-bold'>Wind</p>
            <p>45 m/s</p>
          </div>
          <div className='bg-white text-black opacity-50 rounded-xl p-2'>
            <p className='font-bold'>Clouds</p>
            <p>90%</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather
