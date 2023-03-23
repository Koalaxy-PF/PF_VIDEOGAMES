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
import { useState } from "react";

export default function ShoppingCart(){

    const allCart = useSelector((state) => state.AllCart);
    const User = useSelector((state) => state.user);
    const [paymentMethod, setPaymentMethod] = useState('');
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

    const handleClick = (e) => {

        e.preventDefault();

        // EL USUARIO NO ESTÁ VALIDADO, NO PUEDE COMPRAR.

        if(Object.keys(User).length === 0){
            return Swal.fire({
                icon: 'error',
                title: 'Something went wrong!',
                text: 'You have to log in to buy',
            })
        }

        else{

            if(paymentMethod === ""){
                return Swal.fire({
                    icon: 'warning',
                    title: 'Something went wrong!',
                    text: 'Please select a payment method',
                })
            }
            
            // LÓGICA PARA CONDICIONAR SI SE VA POR PAYPAL O MERCADOPAGO.

            if(paymentMethod === "Mercado Pago"){
                return Swal.fire({
                    icon: 'error',
                    title: 'Something went wrong!',
                    text: 'En proceso!',
                })
            }

            if(paymentMethod === "PayPal"){
                dispatch(PostPaypal(User.user.id)).then((response) => {
                    window.open(response.data.links[1].href, '_blank')
                })
                  .catch((error) => {
                    // manejar errores
                  });
        
                  dispatch(getInCart(User.user.id));
            }

        }        
      }

        const DeleteProduct = (id, name) => {

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
                dispatch(DeleteProductCartLocalStorage(name)).then(() => {
                    dispatch(setAllCart());
                })
            }
       }

    return(
        <div >

                <div className="">
                    <NavBar/>
                </div>

                <div className="flex  w-full" style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>

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
                
                        <div className="bg-none border-white flex ">
                                <selection className = "py-4 container m-6 w-full">

                                <div className="row justify-center flex-col m-6 ">

                                    <div className="col-12">

                                            <table className="table-light table hover m-0 bg-none inline-flex   w-full relative box-border border-4 border-green-200 "> 

                                                <tbody className="w-full relative mt-6 bg-auto  ">                         
                                                        {allCart.productcarts?.map( (e , index) =>{
                                                    return(
                                                    
                                                    <tr key = {index} className="bg-none box-border bg-auto mt-6  lg:gap border-8 border-white  item-center justify-center  ">
                                                        <td >
                                                            <img src={e.img} alt=""  width={"150px"} height={"20px"} />    
                                                        </td>

                                                        <td>
                                                            <h1 className="mt-6 text-xl font-extrabold text-white "> {e.name} </h1>    
                                                        </td>

                                                        <td>
                                                            <h2 className="mt-6 text-xl font-extrabold text-white"> $ {e.priceProduct}</h2>
                                                        </td>

                                                        <ty>
                                                        <button onClick={() => DeleteProduct(e.id, e.name) }>
                                                         <img  class= " z-10  my-auto h-9 mt-8 text-center "src = {Trash}/>
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

                        <div  className=" text-center flex h-full flex-1 flex-col mx-8 mt-4" >
                        {
                            <h1 className="mt-6 text-3xl font-extrabold text-white" >Total: ${allCart.total} </h1>
                        }

                        <select
                            className="px-3 mt-8 bg-gray-400 text-black py-3 rounded-xl border-2 border-white text-xl text-center"
                            onChange={(e) => setPaymentMethod(e.target.value)} value={paymentMethod}>
                            
                            <option selected hidden > Payment method </option>
                            <option>PayPal</option>
                        </select>

                            <button className="px-3 mt-4 bg-gray-400 text-black py-3 rounded-xl border-2 border-white text-xl text-center"
                                onClick={(e) => handleClick(e)}>Buy</button>
                         </div>

                         
                 </div>

                    }
                         

                </div>
            
                <div>
                    <Footer/>
                </div>
        </div>
    )
}