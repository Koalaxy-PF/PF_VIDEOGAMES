import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart} from "../../redux/actions/actions"
import {useEffect} from "react"

import {Link} from "react-router-dom";

import imgError from "../../assets/Error/Error1-png.png"

export default function CartContainer(){

    const allCart = useSelector((state) => state.AllCart);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInCart(User.id));
      }, [dispatch]); 

    return(
        <div className="justify-center item-center h-full w-full bg-gray-100">

                        <div className="bg-red-200 justify-center item-center flex  ">
                            {<h1 className="mt-6 text-2xl font-extrabold text-gray-900" >Total: {allCart.total} </h1>}
                         </div>

                        <div className="justify-center item-center  w-full flex-wrap">
                            
                            {allCart.productcarts?allCart.productcarts.map( (e) =>{
                            return(       
                            
                                <div  className="w-72  shadow-lg shadow-slate-600 mb-2 "> 

                                    <img src={e.img} alt="" className="w-full h-full object-cover" />
                                    
                                    <div className="flex flex-col justify-center item-center gap-4 p-[10px] bg-white">
                                        <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>
                                        <h2 className="mt-6 text-xl font-extrabold text-green-400"> {e.priceProduct}</h2>
                                    </div>
                            
                                </div>
                                
                            )
                        })
                        :
                        <div className="flex justify-center item-center ">
                                   <div className="hidden lg:block relative h-full flex-1 ">
                                   <h1 className="mt-6 text-xl font-extrabold text-gray-900 ">I do not add products to the shopping cart</h1>
                                    <img class='w-[750px] ' src={imgError} alt="" /> 
                                    
                                    </div>
                       </div>

                        }
                        </div>
    
        </div>
    )
}