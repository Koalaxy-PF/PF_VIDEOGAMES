import { useState, useRef } from 'react'
import CreateUser from '../createUser/createUser'
import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import Footer from '../../components/Footer/Footer'
import Sidebar from '../../components/SideBar/Sidebar'
import Carrucel_main from '../../components/Carrucel/Carrucel_main'

export default function Home(){

  return (
    <div className="App">

      <div>
        <Navbar/>
      </div>

      <div className='flex w-full'>
        <Sidebar />
        <Carrucel_main />
      </div>

      <div>
        <Footer/>
      </div>
    </div>
  )
}