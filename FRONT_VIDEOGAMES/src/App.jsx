import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './App.css';

function App() {
  
  const settings = {
    dots: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,

    autoplay: true,
    autoplaySpeed: 4000,
  };

    return (
      <div className='w-100vh'>
        <div className='mt-5'>

        <Slider {...settings}>

          <div className='flex relative bg-gradient-to-b from-green-100 to-black'>
            <img src="https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg"
            className="w-full h-[700px] absolute object-cover mix-blend-overlay" alt="" />

            <div className='flex justify-between w-full pt-[640px] mx-5 h-[700px]'>

              <div className='tittle-Game relative'>
                <h1 className='text-5xl text-slate-200'>Borderlands 3</h1>
              </div>

              <div className=''>
                <button type="button" className="mr-20 relative px-8 py-4 overflow-hidden font-semibold rounded bg-green-800 text-slate-100 text-xl">Add to Cart
	              <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left
                  transform rotate-45 -translate-y-full translate-x-1/3 text-slate-900 bg-purple-300">New</span>
                </button>
              </div>
              
            </div>
          </div>

          <div className='bg-gradient-to-b from-slate-300 to-black relative'>
            <img src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltbad15ce51fe5f395/60db79fca37ada0f2ccece67/c099e2f887d48ad25450d441d73a46f5a6454081.png"
            className="w-full h-[700px] object-cover mix-blend-overlay" alt="" />
          </div>

          <div className='bg-gradient-to-b from-slate-300 to-black relative'>
            <img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e"
            className="w-full h-[700px] object-cover mix-blend-overlay" alt="" />
          </div>

          
         
         
          </Slider>
        </div>
      </div>
    );
}

export default App;