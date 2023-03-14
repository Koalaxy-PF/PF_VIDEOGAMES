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
        <div >

                <div>
                    <NavBar/>
                </div>

                <div className="flex  bg-gray-200 ">

                    <div className='flex min-h-[calc(100vh-5rem)]'>
                    <Sidebar/>
                    </div>
                        
                    <div className="w-full relative">
                        
                        <div  className="relative w-full">

                        <div  className=" text-center" >
                        {
                            <h1 className="mt-6 text-2xl font-extrabold text-gray-900" >Total: {allCart.total} </h1>
                        }

                        </div>
                

                            <selection className = "py-4 container ">

                                <div className="row justify-center">

                                    <div className="col-12">
  
                                            <table className="table table-light table hover m-0 bg-gray-100 inline-flex  w-full relative "> 
  
                                                <tbody className="w-full relative ">                         
                                                        {allCart.productcarts?.map( (e , index) =>{
                                                    return(
                                                    
                                                    <tr key = {index} className="">
                                                        <td>
                                                            <img src={e.img} alt=""  width={"300px"} height={"250px"} />    
                                                        </td>

                                                        <td>
                                                            <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>    
                                                        </td>

                                                        <td>
                                                            <h2 className="mt-6 text-xl font-extrabold text-gray-900"> {e.priceProduct}</h2>  
                                                        </td>

                                                        <ty>
                                                        <button onClick={() => DeleteProduct(e.id) }>
                                                        <img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/009/344/493/small/x-transparent-free-png.png" alt="" />
                                                        </button>
                                                        </ty>
                                                    </tr>

                                                    )

                                                    })
                                                    }

                                                </tbody>
                                        
                                            </table>
                    
                                    </div>

                                </div>
                            </selection>

                               {/* Marina */}

                                    



                                  {/* Marina */}

                        </div>
                 </div>
                      

                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}