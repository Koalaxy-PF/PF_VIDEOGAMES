import React  from "react";
import { useDispatch, useSelector } from "react-redux";
import {getInCart, DeleteProductCart, setAllCart, DeleteProductCartLocalStorage, PostPaypal } from "../../redux/actions/actions"
import {useEffect} from "react"
import NavBar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/SideBar/Sidebar";
import Footer from "../../components/Footer/Footer";
import Swal from "sweetalert2";
import Trash from "../../assets/icons/trashCan.png"
import Error from '../../assets/Error/Cart/EmptyCart.png'

export default function ShoppingCart(){

    const allCart = useSelector((state) => state.AllCart);
    const User = useSelector((state) => state.user);
    const dispatch = useDispatch();
    
    useEffect(() => {

        // COMPROBAMOS SI LEEMOS EL CARRITO DE LA BASE DE DATOS O EL LOCAL STORAGE.
        
        if(window.localStorage.getItem('info-token')){
            dispatch(getInCart(User.user.id));
        }

        else{
             dispatch(setAllCart()) // Aquí se carga el carrito en AllCart
        }
        
    }, []); 

    const handleClick = (e, id) => {

        e.preventDefault();

        // LÓGICA PARA CONDICIONAR SI SE VA POR PAYPAL O MERCADOPAGO.
        
        
        dispatch(PostPaypal(id)).then((response) => {
            window.open(response.data.links[1].href, '_blank')
        }).then((response) => {
          })
          .catch((error) => {
            // manejar errores
          });

          dispatch(getInCart(User.user.id));
      }

        const DeleteProduct = (id) => {

            if(window.localStorage.getItem('info-token')){
                dispatch(DeleteProductCart(id, User.user.id)).then((resp) => {
                    Swal.fire({
                        icon: 'sucess',
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

            else{
                dispatch(DeleteProductCartLocalStorage(id)).then(() => {
                    dispatch(setAllCart());
                })
            }
       }

    return(
        <div >

                <div className="">
                    <NavBar/>
                </div>

                <div className="flex  bg-gray-100  ">

                    <div className='flex min-h-[calc(100vh-5rem)]'>
                    <Sidebar/>
                    </div>

                    {
                        allCart.total === 0 || allCart === "" ?
                            <div>
                                <img className="w-1/3 mx-auto" src={Error} alt="" />
                            </div>
                        
                        :

                    <div className="w-full relative box-border border-2 flex ">
                        
                        <div  className="relative w-3/4 ">
                
                        <div className="bg-white box-border border-2 border-green-300 flex ">
                                <selection className = "py-4 container m-6 w-full">

                                <div className="row justify-center flex-col m-6 ">

                                    <div className="col-12">

                                            <table className="table table-light hover m-0 bg-gray-100 inline-flex   w-full relative box-border border-4 border-green-200 "> 

                                                <tbody className="w-full relative mt-6 bg-auto  ">                         
                                                        {allCart.productcarts?.map( (e , index) =>{
                                                    return(
                                                    
                                                    <tr key = {index} className="bg-gray-100 box-border bg-auto mt-6  lg:gap border-8 border-white  item-center justify-center  ">
                                                        <td >
                                                            <img src={e.img} alt=""  width={"150px"} height={"20px"} />    
                                                        </td>

                                                        <td>
                                                            <h1 className="mt-6 text-xl font-extrabold text-gray-900 "> {e.name} </h1>    
                                                        </td>

                                                        <td>
                                                            <h2 className="mt-6 text-xl font-extrabold text-gray-900">  ${e.priceProduct}</h2>  
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

                        <div  className=" text-center flex h-full flex-1 flex-col mx-8 mt-4" >
                        {
                            <h1 className="mt-6 text-3xl font-extrabold text-gray-900 " >Total: {allCart.total} </h1>
                        }

                            <select className="px-3 mt-8 bg-green-400 text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black">
                                <option selected hidden > Payment method </option>
                                <option>PayPal</option>
                                <option>Mercado Pago</option>
                            </select>

                            <button className="px-3 mt-4 bg-green-600 text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black"
                                onClick={(e) => handleClick(e, User.user.id)}>Buy</button>
                         </div>

                            {/* Marina */}
                 </div>

                    }
                         

                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}