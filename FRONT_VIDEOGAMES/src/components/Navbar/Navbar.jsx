import React from "react";

//importamos los iconos png 
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import darkMode from "../../assets/icons/darkmode.png"
import koala from "../../assets/icons/koalaLogo.png"

export default function NavBar(){

    return(
        <div class="flex item-center justify-between flex-wrap bg-white p-4">

            <div class="flex item-center flex-shrink-0 text-black mr-6">

                <img  class= " z-10 inset-y-0 my-auto h-12 "src = {koala}/>
                <span class="font-semibold text-5xl tracking-tight"> Koalaxy </span>

            </div>
         
            
            {/* <div w-full flex-grow lg:flex lg:items-center lg:w-auto text-center>

                <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-9 bg-gray-300 rounded-full p-1"src = {trolley}/> </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"> <img  class= " z-10 inset-y-0 my-auto h-9 bg-gray-300 rounded-full p-1"src = {heart}/> </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 mr-4">  <img  class= " z-10 inset-y-0 my-auto h-9 bg-gray-300 rounded-full p-1"src = {user}/> </a>
                <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"><img  class= " z-10 inset-y-0 my-auto h-9 bg-gray-300 rounded-full p-1"src = {darkMode}/> </a>

            </div> */}


        </div>
    )

}