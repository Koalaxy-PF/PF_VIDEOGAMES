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

  return (
    <div className="">

      <div className='top-0'> 
        <Navbar/>
      </div>


          <div className='flex flex-row'>

            <div className='bg-gray-900'>
              <Sidebar />
            </div>
         

            <div className='px-[20px] w-[100%]'>
              <Carrucel_main />
              <Slider2 />
            </div>
        </div>


      <div className='w-screen'>
        <Footer/>
      </div>
    </div>
  )
}