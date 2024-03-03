import React from 'react';
import hotel from '../Assets/hotel.jpg';

const Hero = () => {
  return (
    <div class="w-full h-screen  ">
        <img className='top-0 left-0 object-cover w-full h-screen' src={hotel} alt="hotel front"/>
        <div className='absolute top-0 left-0 w-full h-screen bg-black/30' /> 

        <div className='absolute top-0 flex flex-col justify-center w-full h-full text-center text-white md:text-left'>
            <div className='md:left-[10%] max-w-[1100px] m-auto p-4 '>
            <p className=''>All inclussive</p>
            <h1 className='text-3xl font-bold md:text-5xl drop-shadow-2xl'>Private beaches and gateaways</h1>
             <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>This accommodation is a 1-minute walk from the beach. Located 12 km from Colombo, Saprin Beach Resort offers an outdoor pool and a private beach area.
                 The hotel has a sun terrace and views of the sea. Free private parking is available on site.</p>
            <button className='px-3 py-2 text-black transition duration-100 ease-linear transform rounded-full hover:scale-110 hover:bg-blue-600 bg-sky-400'>Reserve Now</button>
            </div>
            
        </div>
      
    </div>
  )
}

export default Hero
