import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scrol'
    }
  };

  return (
    <div className='absolute flex items-center justify-between w-full p-4'>
      <h1 className='z-20 text-2xl font-bold text-white'>panapitiya hotels</h1>
      <TiThMenu onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed  left-0 top-0 w-full h-screen  px-4 py-7 flex-col z-10 bg-blue-950/80 text-white'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='fixed flex flex-col items-center justify-center w-full h-full'>
          <li className='p-8 text-3xl font-bold'>Home</li>
          <li className='p-8 text-3xl font-bold'>Destinations</li>
          <li className='p-8 text-3xl font-bold'>Reservations</li>
          <li className='p-8 text-3xl font-bold'>Amenities</li>
          <li className='p-8 text-3xl font-bold'>Rooms</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
