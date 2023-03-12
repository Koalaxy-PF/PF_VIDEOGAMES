import { useState, useRef } from 'react'
import CreateUser from '../createUser/createUser'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/SideBar/Sidebar'
import Carrucel_main from '../../components/Carrucel/Carrucel_main'
import Cards from '../../components/CardContainer/CardContainer'
import Slider2 from '../../components/Carrucel/Slider'
export default function Home(){

  const data = [
        {
          name: "FORSPOKEN",
          img: "https://fyre.cdn.sewest.net/forspoken/6189087b0af2d9001990bfe2/sharing-p3zcX_kG4.png",
          genre: ["Action", "Adventure", "Rol"],
          price: 70,
        },

        {
          name: "WATCH DOGS LEGION",
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/2239550/capsule_616x353.jpg?t=1674755684",
          genre: ["Action", "Adventure"],
          price: 60,
        },

        {
          name: "DEAD SPACE",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/1693980/capsule_616x353.jpg?t=1677545181",
          genre: ["Action", "Adventure"],
          price: 60,
        },

        {
          name: "PIZZA TOWER",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/2231450/capsule_616x353.jpg?t=1674756021",
          genre: ["Action", "Indie"],
          price: 20,
        },

        {
          name: "AQUATICO",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/1812300/header.jpg?t=1676051297",
          genre: ["Simulation", "Strategy"],
          price: 25,

        },
    ];

    const vendidos = [
        {
          name: "SONS OF THE FOREST",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/1326470/capsule_616x353.jpg?t=1677179639" 
        },
        {
          name: "HOGWARTS LEGACY",
          img: "https://cdn1.epicgames.com/offer/e97659b501af4e3981d5430dad170911/EGS_HogwartsLegacy_AvalancheSoftware_S1_2560x1440-2baf3188eb3c1aa248bcc1af6a927b7e"
       },
       {
          name: "FIFA 23",
          img: "https://cdn1.epicgames.com/offer/f5deacee017b4b109476933f7dd2edbd/EGS_EASPORTSFIFA23StandardEdition_EACanada_S1_2560x1440-aaf9c5273c27a485f2cce8cb7e804f5c"
       },
       {
          name: "FAR CRY 5",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/552520/capsule_616x353.jpg?t=1671031724" 
       },
       {
          name: "RED DEAD REDEMPTION II",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/1174180/capsule_616x353.jpg?t=1671485009" 
       },
       {
          name: "ASASSINS CREED VALHALLA",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/2208920/capsule_616x353.jpg?t=1671135934"
       },
    ];

    const Tendencias = [

        {
          name: "OCTOPATH TRAVELER II",
          img: "https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000058128/1e6e0b547a00e768e9c67263fedd6c34be54521169b7eb597892767bc72113b4",
        },
        {
          name: "ATOMIC HEART",
          img: "https://cdn.cloudflare.steamstatic.com/steam/apps/668580/capsule_616x353.jpg?t=1676995676",
        },
        {
          name: "WO LONG: FALLEN DINASTY",
          img: "https://i.ytimg.com/vi/1tLW3iyda0A/maxresdefault.jpg" 
        },
        {
          name: "LIKE A DRAGON: INSHIN",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/1805480/capsule_616x353.jpg?t=1677020327" 
        },
        {
          name: "HI-FI RUSH",
          img: "https://cdn.akamai.steamstatic.com/steam/apps/2076280/header.jpg?t=1675449717" 
        },
    ];

  return (
    <div className="Home">


      <div className='top-0'> 
        <Navbar/>
      </div>


          <div className='flex flex-row'>

            <div className='bg-gray-900'>
              <Sidebar />
            </div>
         

            <div className='bg-gray-200 w-full'>
              <Slider2 data={Tendencias} tittle={"NOVEDADES Y TENDENCIAS"} />
              <Slider2 data={vendidos} tittle={"MÁS VENDIDOS"} />
              <Slider2 data={data} tittle={"MEJORES JUEGOS DE FEBRERO"} />
              
            </div>
        </div>


      <div className='w-full'>
        <Footer/>
      </div>
    </div>
  )
}