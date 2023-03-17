import React from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import darkMode from "../../assets/icons/darkmode.png"
import koala from "../../assets/icons/koalaLogo.png"

export default function NavBar(){

    return(
        <div className="bg-white">
                    <div class="flex item-center justify-between flex-wrap p-4">

                    <div class="flex item-center flex-shrink-0 text-black mr-6 sticky ">

                    <Link to= "/"><img  class= " z-10 inset-y-0 my-auto h-12  sticky "src = {koala}/> </Link>
                    <Link to= "/">  <span class="font-semibold text-5xl tracking-tight sticky "> Koalaxy </span> </Link>

                    </div>


                    <div w-full flex-grow lg:flex lg:items-center lg:w-auto text-center>
                    {/* <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"><img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {darkMode}/> </a>  */}
                        <Link to="/WishList"><a class="block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {heart}/> </a> </Link>
                        <Link to= "/ShoppingCart"> <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {trolley}/> </a></Link>
                        <Link to= "/login">  <a class="block mt-4 lg:inline-block lg:mt-0 mr-4">  <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {user}/> </a></Link>
                    </div>
                    </div>
        </div>
    )

}