import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart} from "../../redux/actions/actions"
import {useEffect} from "react"
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";

export default function ShoppingCart(){

    const allCart = useSelector((state) => state.AllCart);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInCart(User.id));
      }, [dispatch]); 

    return(
        <div className="h-full ">

                <div>
                    <NavBar/>
                </div>

                <div className="flex min-height-full  item-center bg-gray-200 ">

                    <div className='flex min-h-[calc(100vh-5rem)]'>
                    <Sidebar/>
                    </div>
                        
                    <div className="flex justify-center item-center">
                        
                        <div  >
                        <div  >
                        {
                            <h1 className="mt-6 text-xl font-extrabold text-gray-900" >Total: {allCart.total} </h1>
                        }

                        </div>
                
                        <div className="justify-center item-center flex " >
                            {allCart.productcarts?.map( (e) =>{
                            return(       
                            
                                <div className="justify-center item-center w-[100%] bg-blue-300 shadow-md shadow-slate-600 mb-2"> 

                                    <img src={e.img} alt=""  width={"300px"} height={"200px"} />
                                    
                                    <div className="flex flex-col gap-4 p-[20px]'">
                                        <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>
                                        <h2 className="mt-6 text-xl font-extrabold text-gray-900"> {e.priceProduct}</h2>
                                    </div>
                            
                                </div>
                                
                            )
                        })}
                        </div>
                        </div>
                 </div>


                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}