import React from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import koala from "../../assets/icons/koalaLogo.png"


import Style from "../LandingPage/LandingPage.css"


export default function ReturnLandingPage(){

    return(
        <div className="bg-gray-300 flex flex-col">
            <div>
                <div class="flex item-center justify-between flex-wrap bg-white p-4 sticky">
                        <div class="flex item-center flex-shrink-0 text-black mr-6 sticky ">
                            <img  class= " z-10 inset-y-0 my-auto h-12  sticky "src = {koala}/>
                            <span class="font-semibold text-5xl tracking-tight sticky "> Koalaxy </span>
                        </div>

                        <div w-full flex-grow lg:flex lg:items-center lg:w-auto text-center>
                            <Link to="/home"><button class="block mt-4 lg:inline-block lg:mt-0 mr-4 font-semibold text-5xl tracking-tight sticky"> Enter </button></Link>
                        </div> 
                </div>
            </div>
            
            <div className="animation">

            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )

}