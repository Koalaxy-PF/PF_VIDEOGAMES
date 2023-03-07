import { useState } from 'react'
import icons from '../../assets/icons colores/icons.js'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Link } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Sidebar(){

    const [open, setOpen] = useState(true);

    return (
    <div className={`bg-gray-900 h-100vh p-5 pt-2 relative ${open ? "w-60" : "w-20"} duration-500`}>
      <BsFillArrowLeftCircleFill className={`bg-gray-500 text-white text-4xl rounded-full absolute -right-4 top-2 border border-[#609CA4] cursor-pointer ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)} />

    
    {/* SEARCH */}

    <div>
      <SearchBar open={open} />
    </div>

    <hr class="h-px my-2.5 border-0 bg-gray-500" />

    {/* INICIO */}

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <Link to="/">
        <div className='flex flex-row'>
          <img src={icons.img3} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Inicio</h1>
          </span>
        </div>
      </Link>
    </div>

    {/* TIENDA */}

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <Link to="/Store">
        <div className='flex flex-row'>
          <img src={icons.img4} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Tienda</h1>
          </span>
        </div>
      </Link>
    </div>

    {/* BIBLIOTECA */}

    {/* <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <Link to="/Store">
        <div className='flex flex-row'>
          <img src={icons.img1} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Biblioteca</h1>
          </span>
        </div>
      </Link>
    </div> */}

    {/* FAVORITOS */}

    {/* <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <span>
        <img src={icons.img2} className='block w-8 items-center text-white text-4xl cursor-pointer' />
      </span>

      <span className={`text-base font-medium flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
        <h1>Favoritos</h1>
      </span>
    </div>  */}

    {/* SOPORTE */}

    {/*<div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <span>
        <img src={icons.img5} className='block w-8 items-center text-white text-4xl cursor-pointer' />               
      </span>

      <span className={`text-base font-medium  flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
        <h1>Soporte</h1>
      </span>
    </div> */}

  </div>
  )
}
