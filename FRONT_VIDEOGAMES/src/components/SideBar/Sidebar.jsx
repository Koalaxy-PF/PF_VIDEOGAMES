import { useEffect, useState } from 'react'
import icons from '../../assets/icons colores/icons.js'
import { BsFillArrowLeftCircleFill } from "react-icons/bs"
import { Link, useLocation } from "react-router-dom";
import SearchBar from '../SearchBar/SearchBar.jsx';
import { useSelector } from 'react-redux';

export default function Sidebar(){

    const [open, setOpen] = useState(false);
    const User = useSelector((state) => state.user);

    const location = useLocation()

    useEffect(() =>{
      const divHome = document.getElementById("divHome");
      const divStore = document.getElementById("divStore");
      const divLibrary = document.getElementById("divLibrary");
      const divWishList = document.getElementById("divWishList");
      const divCart = document.getElementById("divCart");
      const divSupport = document.getElementById("divSupport");

      if(location.pathname === '/home'){
        divHome.classList.remove("invisible")
        divStore.classList.add("invisible")
        divLibrary.classList.add("invisible")
        divWishList.classList.add("invisible")
        divCart.classList.add("invisible")
        divSupport.classList.add("invisible")
      } 

      if(location.pathname === '/Store'){
        divHome.classList.add("invisible")
        divStore.classList.remove("invisible")
        divLibrary.classList.add("invisible")
        divWishList.classList.add("invisible")
        divCart.classList.add("invisible")
        divSupport.classList.add("invisible")
      } 

      if(location.pathname === '/Library'){
        divHome.classList.add("invisible")
        divStore.classList.add("invisible")
        divLibrary.classList.remove("invisible")
        divWishList.classList.add("invisible")
        divCart.classList.add("invisible")
        divSupport.classList.add("invisible")
      } 

      if(location.pathname === '/WishList'){
        divHome.classList.add("invisible")
        divStore.classList.add("invisible")
        divLibrary.classList.add("invisible")
        divWishList.classList.remove("invisible")
        divCart.classList.add("invisible")
        divSupport.classList.add("invisible")
      }

      if(location.pathname === '/ShoppingCart'){
        divHome.classList.add("invisible")
        divStore.classList.add("invisible")
        divLibrary.classList.add("invisible")
        divWishList.classList.add("invisible")
        divCart.classList.remove("invisible")
        divSupport.classList.add("invisible")
      } 

      if(location.pathname === '/Support'){
        divHome.classList.add("invisible")
        divStore.classList.add("invisible")
        divLibrary.classList.add("invisible")
        divWishList.classList.add("invisible")
        divCart.classList.add("invisible")
        divSupport.classList.remove("invisible")
      } 
    }, [location])

    return (
    <div className={`bg-transparent h-100vh justify-items-start pt-2 relative ${open ? "w-60" : "w-20"} duration-500`}>


    {/*<BsFillArrowLeftCircleFill className={`bg-gray-500 text-white text-4xl rounded-full absolute -right-4 top-2 border
     border-[#609CA4] cursor-pointer ${!open && "rotate-180"}`}
      onClick={() => setOpen(!open)} /> */}

    
    {/* SEARCH */}

    {/*<div>
      <SearchBar open={open} setOpen={setOpen} />
    <hr class="h-px my-2.5 border-0 bg-gray-500" />
    </div>*/}


    {/* INICIO */}

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
    <div id='divHome' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
      <Link to="/home">
        <div className='ml-2 flex flex-row'>
          <img src={icons.img3} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Inicio</h1>
          </span>
        </div>
      </Link>
    </div>

    {/* TIENDA */}

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
    <div id='divStore' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
      <Link to="/Store">
        <div className=' ml-2 flex flex-row'>
          <img src={icons.img4} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Tienda</h1>
          </span>
        </div>
      </Link>
    </div>

    {/* BIBLIOTECA */}

    {

      Object.keys(User).length === 0 ? 

      <>

      </>

      :

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
      <div id='divLibrary' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
      <Link to="/Library">
        <div className='ml-2 flex flex-row'>
          <img src={icons.img1} className="w-8 items-center" />              
          <span className={`font-medium ml-3 text-md mt-1 flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
            <h1>Biblioteca</h1>
          </span>
        </div>
      </Link>
    </div> 

    }


    {/* FAVORITOS */}

    {
      Object.keys(User).length === 0 ? <></> :

        <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
          <div id='divWishList' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
          <Link to="/WishList"> 
            <span >
              <img src={icons.img2} className=' ml-2 block w-8 items-center text-white text-4xl cursor-pointer' />
            </span>

            <span className={`text-base font-medium flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
              <h1>Favoritos</h1>
            </span>
          </Link>
        </div>
    }

    {/* CARRITO */}

    <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
    <div id='divCart' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
      <Link to="/ShoppingCart">
      <span>
        <img src={icons.img6} className='ml-2 block w-8 items-center text-white text-4xl cursor-pointer' />
      </span>

      <span className={`text-base font-medium flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
        <h1>Favoritos</h1>
      </span>
      </Link>
    </div>

    {/* SOPORTE */}

    <Link to="/Support">
     <div className={`flex mt-4 items-center cursor-pointer rounded-full ${open && "bg-gray-600 pl-4 py-2 gap-x-2"}`}>
     <div id='divSupport' class="bg-cyan-400 bg-cover w-2 h-8 rounded invisible"></div>
      <span>
        <img src={icons.img5} className='ml-2 block w-8 items-center text-white text-4xl cursor-pointer' />               
      </span>

      <span className={`text-base font-medium  flex-1 duration-200 text-slate-100 ${!open && "hidden"}`}>
        <h1>Soporte</h1>
      </span>
    </div> 
    </Link>
  </div>
  )
}
