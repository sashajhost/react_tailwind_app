import React from 'react';
import Hero from './Components/Hero';
import Navbar from './Components/Navbar';
import Offers from './Components/Offers';
import Plan from './Components/Plan';
import Rooms from './Components/Rooms';
import ImageSlider from './Components/ImageSlider';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <ImageSlider/>
      <Footer/>
      
      
    </div>
  )
}

export default App

