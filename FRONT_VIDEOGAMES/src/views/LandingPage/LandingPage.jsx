import React from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import Footer from "../../components/Footer/Footer";
import "./LandingPage.css"


export default function ReturnLandingPage(){

    return(
        <div className="bg-gray-200 ">

            <div className="  min-h-screen ">
                    <div className=" bg-gray-white p-2">

                        
                        <div className="animation flex justify-center items-center border-white border-2 ">
                            
                  
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