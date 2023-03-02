import { useState, useRef } from 'react'
import CreateUser from '../createUser/createUser'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/SideBar/Sidebar'
import Carrucel_main from '../../components/Carrucel/Carrucel_main'
import Carrucel from '../../components/Carrucel/Carrucel'

export default function Home(){

  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <div className='flex w-full'>
        <Sidebar />

        <div className='flex flex-col w-full'>
          <Carrucel_main />
          <Carrucel />
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}