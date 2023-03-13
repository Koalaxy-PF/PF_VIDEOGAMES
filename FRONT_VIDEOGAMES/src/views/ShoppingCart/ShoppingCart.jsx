import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart, DeleteProductCart } from "../../redux/actions/actions"
import {useEffect} from "react"
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";

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
                            
                                <div className="justify-center item-center w-[100%] bg-blue-300 shadow-md shadow-slate-600 mb-2"> 

                                    <img src={e.img} alt=""  width={"300px"} height={"200px"} />
                                    
                                    <div className="flex flex-col gap-4 p-[20px]'">
                                        <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>
                                        <h2 className="mt-6 text-xl font-extrabold text-gray-900"> {e.priceProduct}</h2>
                                        <h1>{e.id}</h1>
                                    </div>

                                    <div>
                                        <button onClick={() => DeleteProduct(e.id) }>
                                        <img className="w-10" src="https://static.vecteezy.com/system/resources/thumbnails/009/344/493/small/x-transparent-free-png.png" alt="" />
                                        </button>
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