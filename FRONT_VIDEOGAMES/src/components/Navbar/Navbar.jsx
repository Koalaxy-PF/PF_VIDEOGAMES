import React, {useState}from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import darkMode from "../../assets/icons/darkmode.png"
import koala from "../../assets/icons/koalaLogo.png"

import menu from "../../assets/icons/menu.png"



export default function NavBar(){

    let [open,setOpen]=useState(false);

    return(
        <div className="">
                    <div class="flex item-center justify-between flex-wrap p-4 h-full ">

                    <div class="flex item-center flex-shrink-0 text-black mr-6  ">

                    <Link to= "/"><img  class= " z-10 inset-y-0 my-auto h-12  "src = {koala}/> </Link>
                    <Link to= "/">  <span class="font-semibold text-5xl tracking-tight "> Koalaxy </span> </Link>

                    </div>

                   
                    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                     <img  name={open ? 'close':'menu'} class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {menu}/>
                    </div>

                    <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto  justify-center right-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
                        {/* <li><a class="block mt-4 lg:inline-block lg:mt-0 mr-4"><img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {darkMode}/> </a> </li> */}
                        <li> <Link to="/WishList"><a class=" block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {heart}/> </a> </Link></li>
                        <li><Link to= "/ShoppingCart"> <a class=" block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {trolley}/> </a></Link></li>
                        <li><Link to= "/login">  <a class=" block mt-4 lg:inline-block lg:mt-0 mr-4">  <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {user}/> </a></Link></li>
                    </ul>

                    </div>
        </div>
    )

}