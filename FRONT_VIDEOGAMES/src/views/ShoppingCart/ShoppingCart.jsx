import React  from "react";
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";
import CartContainer from "./cartContainer";


export default function ShoppingCart(){

    return(
        <div className="h-full ">

                <div>
                    <NavBar/>
                </div>

                <div className='flex min-height-full '> 

                    <Sidebar/> 
                    <CartContainer/>
                   
                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}