import React, {useState}from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import darkMode from "../../assets/icons/darkmode.png"
import koala from "../../assets/logo/logo.png"





export default function NavBar(){



    return(
        <div className="">
                    <div class="flex item-center justify-between  p-4 h-full">

                    <div class="flex item-center text-black  ">

                    <Link to= "/"><img  class= "z-10   h-12  item-center text-black text -center"src = {koala}/> </Link>
                    </div>

                    <ul className={`  bg-white  justify-between  item-center right-0  flex  pl-9  `}>
                        {/* <li><a class="block mt-4 lg:inline-block lg:mt-0 mr-4"><img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {darkMode}/> </a> </li> */}
                        <li> <Link to="/WishList"><a class=" block lg:inline-block lg:mt-0  mr-3"> <img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {heart}/> </a> </Link></li>
                        <li><Link to= "/ShoppingCart"> <a class=" block lg:inline-block lg:mt-0  mr-3"> <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {trolley}/> </a></Link></li>
                        <li><Link to= "/login">  <a class=" block  lg:inline-block lg:mt-0  mr-3">  <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {user}/> </a></Link></li>
                    </ul>

                    </div>
        </div>
    )

}