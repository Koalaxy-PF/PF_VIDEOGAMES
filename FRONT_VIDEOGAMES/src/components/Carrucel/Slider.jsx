import Card from './Card'
import Slider from 'react-slick'


export default function Slider2(){
    
    const data = [
        {img: "https://fyre.cdn.sewest.net/forspoken/6189087b0af2d9001990bfe2/sharing-p3zcX_kG4.png" },
        {img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/capsule_616x353.jpg?t=1674755684" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/capsule_616x353.jpg?t=1677545181" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/2231450/capsule_616x353.jpg?t=1674756021" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/1675900/capsule_616x353.jpg?t=1677772500" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/1812300/header.jpg?t=1676051297" },
    ]

    const vendidos = [
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1677179639" },
        {img: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e" },
        {img: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/552520/capsule_616x353.jpg?t=1671031724" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1671485009" },
        {img: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934" },
    ]

    const settings = {
        arrows: false,
        Infinite: false,
        speeed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    }


  return (

      <div className=''>

        <div>
            <h1 className="text-2xl mb-2 mt-4 font-extrabold leading-none text-left  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">MEJORES JUEGOS DE FEBRERO</h1>
      
            <Slider {...settings}>
                {data.map((el,index) => <Card key={index} img={el.img} />)}
            </Slider>
         </div>

         <div>
            <h1 className="text-2xl mt-8 mb-2 font-extrabold leading-none text-left  text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">LO MÁS VENDIDO</h1>
      
            <Slider {...settings}>
                {vendidos.map((el,index) => <Card key={index} img={el.img} />)}
            </Slider>
         </div>


        </div>
  )
}
