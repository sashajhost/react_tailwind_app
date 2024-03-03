import React from 'react';
import Hotel1 from '../Assets/Hotel1.jpg';
import Hotel2 from '../Assets/Hotel2.jpg';
import Hotel3 from '../Assets/Hotel3.jpg';
import Hotel4 from '../Assets/Hotel4.jpg';
import Hotel5 from '../Assets/Hotel5.jpg';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='w-full h-full row-span-3 p-2 span-3 rowobject-cover' src={Hotel2} alt=''/>
            <img className='object-cover w-full h-full row-span-2 p-2' src={Hotel1} alt=''/>
            <img className='object-cover w-full h-full row-span-2 p-2' src={Hotel4} alt=''/>
            <img className='object-cover w-full h-full row-span-3 p-2' src={Hotel3} alt=''/>
            <img className='object-cover w-full h-full row-span-2 p-2' src={Hotel5} alt=''/>
        </div>

        <div className='flex flex-col justify-center h-full '>
            <h3 className='justify-center text-5xl font-bold text-center md:text-6xl md:text-left'>Plan your next trip</h3>
            <p className='justify-center py-6 text-2xl text-center md:text-left'> Discover a picturesque retreat nestled on the banks of Weerawila Lake, close to Weerawila Tissa Sanctuary and Bundala Nati
                onal Park. Kirinda Vihara Maha Devi Temple and Yala National Park are within an hour's drive. Enjoy inspiring 
                views from our lake-view outdoor pool. Our on-site restaurants serve up locally sourced seasonal cuisine.</p>
            <p className='justify-center pb-6 text-center md:text-left'>We’re in Colombo’s business district, connected to the World Trade Centre. Dutch 
                Hospital shopping is less than five minutes away, and we’re under two kilometers 
                from Galle Face Beach. Gangarama Temple is 10 minutes away. Local tuk-tuks are available
                 outside the hotel for exploring the area. Enjoy our outdoor pool, karaoke bar, and on-site restaurants.</p>
        </div>

        <div className='flex items-center justify-center md:flex md:justify-normal'>
            <button class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Learn More</button>
            <button class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800">Book Your Trip</button>
        </div>
      
    </div>
  )
}

export default Plan
