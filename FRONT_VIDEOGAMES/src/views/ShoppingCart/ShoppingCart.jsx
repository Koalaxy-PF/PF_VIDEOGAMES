import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart, DeleteProductCart } from "../../redux/actions/actions"
import {useEffect} from "react"
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";

import CarritoVacio from "../../assets/Error/Error2.png.png"

export default function ShoppingCart(){

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
       }

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
                                    
                            
                                <div class= "bg-gray-100 shadow-md mx-[20px] shadow-slate-600 mb-4 border-4"> 
                                 {/*  <div class="flex justify-between ">  */}
                                    <img className="rounded-t-lg h-[150px] w-full object-cover " src={e.img} alt=""  />
                                   {/*  </div>  */}
                                     <div className="px-2  pb-4 mt-2"> 
                                        <h1 className="mt-6 text-xl text-center justify-center  font-extrabold text-gray-900 "> {e.name} </h1>
                                        <h2 className="mt-6 text-xl text-right  font-extrabold text-gray-900"> {e.priceProduct}</h2>
                                        
                                     </div> 

                                    <div className="text-right">
                                        <button  onClick={() => DeleteProduct(e.id) }>
                                        <img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/009/344/493/small/x-transparent-free-png.png" alt="" />
                                        </button>
                                    </div>
                            
                                </div>
                                
                            )

                        })
                         }
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