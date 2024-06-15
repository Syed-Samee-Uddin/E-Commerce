import React from 'react'
import './Hero.css'
import pointingleft6 from '../Assets/pointingleft6.png'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
        <h2>Get Upto 30% OFF </h2>
        <h2> FOR NEW ARRIVALS </h2>
            <div className='hero-shopnow-btn'>Shop now</div>
        </div>
       


    <div className="hero-right">
    <img src={pointingleft6} alt="" />
    </div>
    </div>
  )
}

export default Hero