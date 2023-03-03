import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrucel(){

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return(
    <div className='bg-gray-200 w-full'>

    <div className='w-[700px] h-48 mb-5 mx-auto mt-5 shadow-2xl bg-purple-900'>
        <Slider {...settings}>
          <div>
            <img src="https://cdn1.epicgames.com/8767c1c91fc847cbafbfa232c695276f/offer/VHGW_UCS15668_EGST_Store_Portrait_1200x1600-1200x1600-162d25b7e8f64823a0a14d87cc42cb8d.jpg?h=480&quality=medium&resize=1&w=360" alt="" className='w-48 h-48' />
          </div>
          <div>
            <img src="https://cdn1.epicgames.com/offer/camellia/ACOrigins_STD_Store_Portrait_1200x1600_1200x1600-4a79f9f393f7a3a9e5be3a0ae581f3d5?h=480&quality=medium&resize=1&w=360" alt="" className='w-48 h-48' />
          </div>
          <div>
            <img src="https://cdn1.epicgames.com/offer/cbd5b3d310a54b12bf3fe8c41994174f/VAL_1200x1600-9d4b02efc9c35dedfb51ec0e1248abec?h=480&quality=medium&resize=1&w=360" alt="" className='w-48 h-48' />
          </div>
          <div>
            <img src="https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S2_1200x1600-2bb94423bf1c7e2fca10577d9f2878b9?h=480&quality=medium&resize=1&w=360" alt="" className='w-48 h-48' />
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
        </Slider>
    </div>
    </div>
  )
}