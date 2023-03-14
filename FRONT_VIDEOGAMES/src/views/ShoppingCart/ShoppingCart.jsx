import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart, DeleteProductCart } from "../../redux/actions/actions"
import {useEffect} from "react"
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";


import Trash from "../../assets/icons/trashCan.png"

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

                <div className="flex  bg-gray-100  ">

                    <div className='flex min-h-[calc(100vh-5rem)]'>
                    <Sidebar/>
                    </div>
                        
                    <div className="w-full relative box-border border-2 flex ">
                        
                        <div  className="relative w-3/4">
                
                        <div className="bg-white box-border border-2 flex border-green-300 flex ">
                                <selection className = "py-4 container m-6 ">

                                <div className="row justify-center flex-col m-6">

                                    <div className="col-12">

                                            <table className="table table-light table hover m-0 bg-gray-100 inline-flex   w-full relative box-border border-4 border-green-200 "> 

                                                <tbody className="w-full relative mt-6 bg-auto flex-col  ">                         
                                                        {allCart.productcarts?.map( (e , index) =>{
                                                    return(
                                                    
                                                    <tr key = {index} className="bg-gray-100 box-border bg-auto mt-6 flex-col  border-8 border-white  item-center justify-center ">
                                                        <td >
                                                            <img src={e.img} alt=""  width={"150px"} height={"20px"} />    
                                                        </td>

                                                        <td>
                                                            <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>    
                                                        </td>

                                                        <td>
                                                            <h2 className="mt-6 text-xl font-extrabold text-gray-900"> {e.priceProduct}</h2>  
                                                        </td>

                                                        <ty>
                                                        <button onClick={() => DeleteProduct(e.id) }>
                                                         <img  class= " z-10  my-auto h-9 text-center "src = {Trash}/>
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
                            </div>


                        </div>

                         {/* Marina adentro de un  */}

                        <div  className=" text-center lg:block relative h-full flex-1" >
                        {
                            <h1 className="mt-6 text-2xl font-extrabold text-gray-900" >Total: {allCart.total} </h1>
                        }
                         </div>

                            {/* Marina */}
                 </div>

           
                      

                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}