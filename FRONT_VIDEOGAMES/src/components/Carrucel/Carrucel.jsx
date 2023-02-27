import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.css';

export default function App() {


  const PreviousBtn = (props) => {
    // console.log(props);
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} />
      </div>
    );
  };

  const NextBtn = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} />
      </div>
    );
  };
  
  const settings = {
    dots: true,
    //className: "center",
    //centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: 2,
    speed: 500,
    slidesToScroll: 2,
   
    //autoplay: true,
    //autoplaySpeed: 2000,
  };

    return (
      <div className='w-100vh'>
        <div className='mt-2'>

        <Slider {...settings}>

          <div className='flex relative shadow-lg'>
            <img src="https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg"
            className="w-full h-[500px] object-cover object-center mix-blend-overlay bg-fixed" alt="" />
          </div>

          <div className='flex relative w-full h-[500px] bg-purple-200'>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg" alt="" className='w-full h-[500px] absolute' />
            <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 absolute text-5xl font-semibold ml-3 mt-3 f'>Borderlands 3</h1>
          </div>
          

          <div className='flex relative'>
            <img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e"
            className="w-full h-[500px] object-cover object-center mix-blend-overlay" alt="" />
          </div>

          <div className='flex w-full h-[500px] bg-purple-200'>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg" alt="" className='w-full h-[500px]' />
          </div>

          <div className='bg-gradient-to-b from-slate-300 to-black relative'>
            <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/1677280/capsule_616x353.jpg?t=1677265328"
            className="w-full h-[500px] object-cover mix-blend-overlay" alt="" />
          </div>

          <div className='flex w-full h-[500px] bg-purple-200'>
            <img src="https://store.akamai.steamstatic.com/public/images/v6/home/background_maincap_2.jpg" alt="" className='w-full h-[500px]  object-cover object-center' />
          </div>


         
          </Slider>
        </div>
      </div>
    );
}