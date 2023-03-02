import { useState, useRef } from 'react'
import CreateUser from '../createUser/createUser'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/SideBar/Sidebar'
import Carrucel_main from '../../components/Carrucel/Carrucel_main'
import Cards from '../../components/CardContainer/CardContainer'

export default function Home(){

  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <div className='flex w-full bg-gray-900 '>
        <Sidebar />
        <Carrucel_main />
      </div>

      <div class='bg-gray-900'>
        <Cards/>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}