import React from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import darkMode from "../../assets/icons/darkmode.png"
import koala from "../../assets/icons/koalaLogo.png"
import { useSelector } from "react-redux"
import * as te from 'tw-elements';

export default function NavBar(){

    const User = useSelector((state) => state.user)

    return(
        <div className="bg-white">
                    <div class="flex item-center justify-between flex-wrap p-4">

                    <div class="flex item-center flex-shrink-0 text-black mr-6">

                    <Link to= "/"><img  class= " z-10 inset-y-0 my-auto h-12 "src = {koala}/> </Link>
                    <Link to= "/">  <span class="font-semibold text-5xl tracking-tight sticky "> Koalaxy </span> </Link>

                    </div>

                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto text-center">
                    {/* <a class="block mt-4 lg:inline-block lg:mt-0 mr-4"><img  class= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {darkMode}/> </a>  */}

                        {
                            Object.keys(User).length !== 0 &&
                                <Link to="/WishList"><a className="block mt-4 lg:inline-block lg:mt-0 mr-4"> 
                                    <img  className= " z-10 inset-y-0 my-auto h-10 hover:bg-gray-600 hover:rounded-full  p-1"src = {heart}/> </a>
                                </Link>
                        }

                        <Link to= "/ShoppingCart"> <a className="block mt-4 lg:inline-block lg:mt-0 mr-4">
                            <img  className= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {trolley}/> </a>
                        </Link>
                        
                        {
                            Object.keys(User).length === 0 ?

                            <Link to= "/login">  <a className="block mt-4 lg:inline-block lg:mt-0 mr-4">  
                                <img  className= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600 hover:rounded-full p-1"src = {user}/> </a>
                            </Link>

                            :

                            <div class="inline-block mb-0">
  <div>
    <div class="relative" data-te-dropdown-ref>
      <button
        class="flex items-center whitespace-nowrap rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] motion-reduce:transition-none"
        type="button"
        id="dropdownMenuButton1d"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="light">
        Dropdown divider
        <span class="ml-2 w-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            class="h-5 w-5">
            <path
              fill-rule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </button>
      <ul
        class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton1d"
        data-te-dropdown-menu-ref>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Action</a
          >
        </li>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Another action</a
          >
        </li>
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Something else here</a
          >
        </li>
        <hr
          class="my-2 h-0 border border-t-0 border-solid border-neutral-700 opacity-25 dark:border-neutral-200" />
        <li>
          <a
            class="block w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
            >Separated link</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
                            
                     

                           
                           
                               
                          
                        }
                    </div>
                    </div>
        </div>
    )

}