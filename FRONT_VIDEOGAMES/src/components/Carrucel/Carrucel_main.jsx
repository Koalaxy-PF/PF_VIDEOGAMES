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
    <img src={icons.img1} alt="nextArrow" {...props} style={{ ...style, margin: '-10px'}} />
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
    <div className='bg-gray-200 w-full'>

    <div>
      <h1 className='text-3xl font-lg font-bold ml-6 mt-6 text-slate-700'>Nuevos Lanzamientos</h1>

    <div className='w-[950px] h-[500px] mx-auto mt-5'>

      <Slider {...settings}>
        <div className=''>
          <img className='shadow-md shadow-slate-600' src="https://cdn1.epicgames.com/catnip/offer/BL3Wide_2560x1440-2560x1440-462318f36bee20de4412e111ef72dc62.jpg" alt=""/>
        </div>

        <div>
          <img className='shadow-md shadow-slate-600' src="https://cdn1.epicgames.com/400347196e674de89c23cc2a7f2121db/offer/AC%20KINGDOM%20PREORDER_STANDARD%20EDITION_EPIC_Key_Art_Wide_3840x2160-3840x2160-485fe17203671386c71bde8110886c7d.jpg"
           alt="" />
        </div>

        <div>
          <img className='shadow-md shadow-slate-600' src="https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c" alt="" />
        </div>
      </Slider>
    </div>


      <h1 className='text-3xl font-lg font-bold ml-6 mt-16 text-slate-700'>Juegos más Vendidos</h1>
      <hr className='mx-5 mt-2 border-slate-700'/>

    </div>
  </div>
  )
}
