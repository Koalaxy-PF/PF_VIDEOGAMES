import React  from "react";
import { useDispatch, useSelector  } from "react-redux";
import {getInCart , DeleteProductCart } from "../../redux/actions/actions"
import {useEffect} from "react"


import imgError from "../../assets/Error/Error2.png.png"

export default function CartContainer(){

    const allCart = useSelector((state) => state.AllCart);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getInCart(User.user.id));
    }, []); 

    const DeleteProduct = (e) => {
        dispatch(DeleteProductCart(e, User.user.id)).then((resp) => {
            Swal.fire({
                icon: 'Success',
                title: resp.data.message,
                text: 'El producto se eliminó!',
        }).then(() => {
            dispatch(getInCart(User.user.id));
        })}).catch((resp) => {
            Swal.fire({
                icon: 'error',
                title: resp.data.message,
                text: 'El producto no se eliminó!',
       })})
       }; 

    return(
        <div className="justify-center item-center h-full w-full  bg-gray-100">

                        <div className="bg-red-200 justify-center item-center flex ">
                            {    
                            
                            <h1 className="mt-6 text-2xl font-extrabold text-gray-900" >Total: {allCart.total} </h1>

                            }
                         </div>

                        <div className="justify-center item-center  flex  ">
                            
                            {allCart.productcarts?allCart.productcarts.map( (e) =>{
                            return(       
                            
                                <div className="justify-center item-center w-[100%] bg-blue-300 shadow-md shadow-slate-600 mb-2"> 

                                    <img src={e.img} alt=""  width={"300px"} height={"200px"} />
                                    
                                    <div className="flex flex-col gap-4 p-[20px]'">
                                        <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>
                                        <h2 className="mt-6 text-xl font-extrabold text-gray-900"> {e.priceProduct}</h2>
                                        <h1>{e.id}</h1>
                                    </div>

                                    <div>
                                        <button onClick={() => DeleteProduct(e.id) }>
                                        <img className="w-10" src="https://assets.stickpng.com/images/5a02bfca18e87004f1ca4395.png" alt="" />
                                        </button>
                                    </div>
                            
                                </div>
                                
                            )
                        })
                        :
                        <div className="flex justify-center item-center ">
                                   <div className="hidden lg:block relative h-full flex-1 ">
                                   <h1 className="mt-6 text-xl font-extrabold text-gray-900 ">The shopping cart is empty</h1>
                                    <img class='w-[450px] ' src={imgError} alt="" /> 
                                    
                                    </div>
                       </div>

                        }
                        </div>
    
        </div>
    )
}