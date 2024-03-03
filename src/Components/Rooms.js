import React from 'react';
import Room1 from '../Assets/Room1.jpg';
import Room2 from '../Assets/Room2.jpg';
import Room3 from '../Assets/Room3.jpg';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg-[20%] md:mb-[35%]'>
        <div>
            <h3>Fine Interior Rooms</h3>
            <p>This double room's standout feature is the pool with a view. The spacious double 
                room offers air conditioning, a minibar, a terrace with garden views as well as 
                a private bathroom featuring a walk-in shower. The unit offers 1 bed.</p>

        </div>

        <div>
            <img src={Room1} alt=''/>
            <img src={Room2} alt=''/>
            <img src={Room3} alt=''/>

        </div>
      
    </div>
  )
}

export default Rooms
