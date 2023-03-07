import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icons from '../../assets/carrucel/icons'

export default function Carrucel_main(){

  const SlickArrowLeft = ({ currentSlide, slideCount, style, ...props }) => (
    <img src={icons.img2} alt="prevArrow" {...props} style={{ ...style, margin: '-10px' }} />
  );

  const SlickArrowRight = ({ currentSlide, slideCount, style, ...props }) => (
    <img src={icons.img1} alt="nextArrow" {...props} style={{ ...style, margin: '-22px'}} />
  );
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <SlickArrowLeft />,
        nextArrow: <SlickArrowRight />,
      };

      
  return (
    <div className='w-screen'>

    <div>
    <div className='w-[900px] ml-40 mb-10 mt-5 shadow-2xl shadow-slate-400'>

      <Slider {...settings}>
        <div>
          <img src="https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg" alt=""/>
        </div>

        <div>
          <img src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
           alt="" />
        </div>

        <div>
          <img src="https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c" alt="" />
        </div>
      </Slider>
    </div>

    </div>
  </div>
  )
}