import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Carrucel() {


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
    rows: 2,
    slidesToScroll: 2,
   
    //autoplay: true,
    //autoplaySpeed: 2000,
  };

    return (
      <div className='w-100vh'>
        <div className='mt-2'>

        
        </div>
      </div>
    );
}