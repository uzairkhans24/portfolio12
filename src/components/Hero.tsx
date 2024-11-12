import React from 'react'


const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/bg.jpg)] bg-cover rounded-half pt-10'
    style={{backgroundSize: "35%" , backgroundPosition: "left 100px top 100px",}}
    >

      <div className='container grid lg:grid-cols-2 h-[calc(100vh-60px)'>
        <div className='hidden lg:block'></div>
        <div className='text-[80px] sm:text-[100px] font-bold leading-tight flex justify-left items-center pt-10'>
          <div>
            <p data-aos="zoom-in-up">I'm</p>
            <p data-aos="zoom-in-up">Uzair</p>
            <p data-aos="zoom-in-up">Khan</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Hero
