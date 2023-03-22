import { postInCart, PostWishList } from "../../redux/actions/actions"
import { useSelector, useDispatch} from "react-redux"
import Swal from "sweetalert2";
import AddToWishList from "../AddToWishList/AddToWishList";
import { Link } from "react-router-dom";

export default function Card({img, id, name, price, genre, calification}){
    
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user);

    // FUNCIÓN PARA METER PRODUCTOS AL CARRITO
    
    const AddCart = (e) => {
        
        e.preventDefault();
        
        // COMPROBAMOS SI EL USUARIO ESTÁ VALIDADO O NO

        if(Object.entries(User).length === 0){

            // USUARIO NO ESTÁ VALIDADO

            const obj = {
                id: id,
                img: img,
                name: name,
                price: price,
            }

            PostInCartLocal(obj);
        }

        // AQUÍ EL USUARIO YA ESTÁ VALIDADO, TIENE UNA CUENTA.

        else{

            // USUARIO VALIDADO CORRECTAMENTE

            const obj = {
                userId: User.user.id,
                productId: id,
            }

            dispatch(postInCart(obj)).then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: response.data.message,
                  })
            }).catch((response) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Something has gone wrong',
                    text: response.response.data.message,
                  })
            })
        }
    }

    const PostInCartLocal = (obj) => {
        
        if(window.localStorage.getItem('carrito-ls')){
        
                const objeto = JSON.parse(window.localStorage.getItem('carrito-ls'));
                const p = [];

                // COMPROBAMOS QUE EL PRODUCTO NO ESTÉ YA EN EL CARRITO. 

                console.log("producto, datos:", obj);

                for(let i=0; i<objeto.productcarts.length; i++){
                    if(obj.name === objeto.productcarts[i].name) {
                        return Swal.fire({
                            icon: 'error',
                            title: 'Something has gone wrong!',
                            text: 'The product is already in your cart',
                          })
                    }
                }
        
                // MODIFICAMOS EL TOTAL DE PRODUCTOS EN EL CARRITO Y SU VALOR TOTAL
        
                objeto.total = objeto.total + obj.price   // TOTAL DE ELEMENTOS
        
                for(let i=0; i<objeto.productcarts.length; i++){
                    p.push(objeto.productcarts[i]);
                }
        
                p.push(obj);
                objeto.productcarts = p;
                window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));
        
                return Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'The product was added to your cart',
                  })
        }
            
        else{

                // EL CARRITO ESTÁ VACÍO Y SE METERÁ EL PRIMER PRODUCTO. 
        
                const objeto = {
                    total: obj.price,
                    productcarts: [obj],
                }
        
                window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));
        
                return Swal.fire({
                    icon: 'success',
                    title: 'Congratulations!',
                    text: 'The product was added to your cart',
                  })
            }
    }

    const AddToWL = (e) => {

        e.preventDefault();

        if(Object.entries(User).length === 0){
            return Swal.fire({
                icon: 'error',
                title: 'Something has gone wrong!',
            text: 'Unregistered users cannot have favorites list',
        })}
        
        else {
            
            const obj = {
                userId: User.user.id,
                productId: id,
            }

            dispatch(PostWishList(obj)).then((response) => {
                return Swal.fire({
                    icon: 'success',
                    title: 'Congratulations',
                    text: 'The product was successfully added to your wishlist'
                  })
            }).catch((response) => {
                return Swal.fire({
                    icon: 'error',
                    title: 'Something has gone wrong!',
                    text: 'The product is already in your wish list'
                  })
                
            })
        }
    }
    
    return(
        <div class="w-full max-w-sm bg-gray-100 shadow-xl shadow-slate-700 mb-1 dark:bg-[#17202A] duration-300">

        <Link to={`/products/${id}`}>
            <img className=" h-[150px] w-full object-cover " src={img} alt="product image" />
        </Link>
    
        <div class="px-2 pb-4 mt-2">
    
            <div>
            <a href="#">
                <h5 class="ml-1 text-xl font-bold tracking-tight text-gray-900 dark:text-slate-100">{name}</h5>
            </a>
    
            <img src="" alt="" />
    
            </div>
            <div class="flex items-center mt-2.5 mb-5">
    
            {calification && [...Array(parseInt(calification))]?.map(() => {
                return(
                    <svg aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                )
                })
            }
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">{calification}</span>


                <a>
                    <div>
                        <button className="text-blue-500 mt-1" onClick={(e) => AddToWL(e)} ><ion-icon name="heart"></ion-icon></button>
                    </div>
                </a>

            </div>
    
            <div className='mt-3 w-full flex text-blue-600'>
                {
                    genre?.map((el) => {
                        return(
                            <div className='mb-4 text-[0.7rem] rounded-full bg-gray-300 mr-1 px-4 py-2 font-semibold'>{el} </div>
                        )
                    })
                }
            </div>
    
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-slate-900 dark:text-slate-100">${price}</span>

                <a href="#" class="text-slate-100 bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={(e) => AddCart(e)}>Add to Cart</a>
            </div>
        </div>
    </div>
  )
}