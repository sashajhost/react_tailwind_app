import React from 'react';
import Room1 from '../Assets/Room1.jpg';
import Room2 from '../Assets/Room2.jpg';
import Room3 from '../Assets/Room3.jpg';



const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-10 pt-3 lg-[20%] md:mb-[20%] grid lg:grid-cols-3 gap-4'>
        <div className='relative col-span-2 pb-3 g:top-20 lg:col-span-1 ps-4'>
            <h3 className='text-2xl font-bold text-center lg:text-left'>Fine Interior Rooms</h3>
            <p className='pt-4 text-center lg:text-left'>This double room's standout feature is the pool with a view. The spacious double 
                room offers air conditioning, a minibar, a terrace with garden views as well as 
                a private bathroom featuring a walk-in shower. The unit offers 1 bed.</p>

        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2 pr-4 ps-4 '>
            <img className='object-cover w-full h-full' src={Room1} alt=''/>
            <img className='object-cover w-full h-full row-span-2' src={Room2} alt=''/>
            <img className='object-cover w-full h-full' src={Room3} alt=''/>

        </div>


       
      
    </div>
  )
}

export default Rooms
