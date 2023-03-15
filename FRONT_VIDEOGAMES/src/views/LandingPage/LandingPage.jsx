import React from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import NavBar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import koala from "../../assets/icons/koalaLogo.png"


import Style from "../LandingPage/LandingPage.css"


export default function ReturnLandingPage(){

    return(
        <div className="bg-gray-300 ">

            <div className="  min-h-screen ">
                    <div className=" bg-gray-300 ">

                        
                        <div className="animation flex justify-center items-center">
                        <Link to="/home"><span class="px-4 bg-none text-white py-4  rounded-xl border-4 border-white text-2xl text-center hover:bg-transparent hover:text-3xl"> Enter </span></Link>
                        </div>


                    </div>
            </div>



            <div className="mx-auto">
                <Footer/>
            </div>
        </div>
    )

}