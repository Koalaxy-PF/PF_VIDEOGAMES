import { postInCart, postInCartLocalStorage } from "../../redux/actions/actions"
import { useSelector, useDispatch} from "react-redux"
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function Card({img, id, name, price, genre, calification}){
    
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user);
    
    const PostInCartLocal = (obj) => {
        
        if(window.localStorage.getItem('carrito-ls')){
        
                const objeto = JSON.parse(window.localStorage.getItem('carrito-ls'));
                const p = [];

                // COMPROBAMOS QUE EL PRODUCTO NO ESTÉ YA EN EL CARRITO. 

                for(let i=0; i<objeto.products.length; i++){
                    if(obj.id === objeto.products[i].id) {
                        return Swal.fire({
                            icon: 'warning',
                            title: '¡Ops! Algo salió mal',
                            text: 'El producto ya está en el carrito',
                          })
                    }
                }
        
                // MODIFICAMOS EL TOTAL DE PRODUCTOS EN EL CARRITO Y SU VALOR TOTAL
        
                objeto.total = objeto.total + 1;    // TOTAL DE ELEMENTOS
                objeto.price = objeto.price + obj.price;    // VALOR TOTAL DE TODOS LOS PRODUCTOS
        
                for(let i=0; i<objeto.products.length; i++){
                    p.push(objeto.products[i]);
                }
        
                p.push(obj);
                objeto.products = p;
                window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));
        
                return Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: 'Se añadió a tu carrito',
                  })
        }
            
        else{

                // EL CARRITO ESTÁ VACÍO Y SE METERÁ EL PRIMER PRODUCTO. 
        
                const objeto = {
                    total: 1,
                    price: obj.price,
                    products: [obj],
                }
        
                window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));
        
                return Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: 'Se añadió a tu carrito',
                  })
            }
    }

    const AddCart = (e) => {

        e.preventDefault();

        // COMPROBAMOS SI EL USUARIO ESTÁ VALIDADO O NO.

        if(Object.entries(User).length === 0){

            console.log("USUARIO NO ESTÁ VALIDADO");

            const obj = {
                id: id,
                img: img,
                name: name,
                price: price,
            }

            PostInCartLocal(obj);
        }

        else{

            console.log("USUARIO VALIDADO");

            const obj = {
                userId: User.user.id,
                productId: id,
            }

            dispatch(postInCart(obj)).then((response) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Felicidades',
                    text: 'Se añadió a tu carrito',
                  })
            }).catch((response) => {
                Swal.fire({
                    icon: 'warning',
                    title: 'Error',
                    text: 'El producto ya está en tu carrito',
                  })
            })
        }
    }
    
    return(
        <div class="w-full max-w-sm bg-gray-100 shadow-md shadow-slate-600 mb-2 border-2">

        <Link to={`/products/${id}`}>
            <img className="rounded-t-lg h-[150px] w-full object-cover " src={img} alt="product image" />
        </Link>
    
        <div class="px-2 pb-4 mt-2">
    
            <div>
            <a href="#">
                <h5 class="ml-1 text-xl font-bold tracking-tight text-gray-900">{name}</h5>
            </a>
    
            <img src="" alt="" />
    
            </div>
            <div class="flex items-center mt-2.5 mb-5">
    
            {calification && [...Array(parseInt(calification))]?.map(() => {
                return(
                    <svg aria-hidden="true" class="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>First star</title>
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                )
                })
            }
                <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{calification}</span>
            </div>
    
            <div className='mt-3 w-full flex text-yellow-800'>
                {
                    genre?.map((el) => {
                        return(
                            <div className='mb-4 text-[0.7rem] rounded-full bg-gray-200 px-4 py-2 font-semibold'>{el} </div>
                        )
                    })
                }
            </div>
    
            <div class="flex items-center justify-between">
                <span class="text-3xl font-bold text-slate-900">${price}</span>

                <a href="#" class="text-slate-100 bg-purple-600 hover:bg-blue-800 focus:ring-4 focus:outline-none
                 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600
                  dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={(e) => AddCart(e)}>Add to Cart</a>
            </div>
        </div>
    </div>
  )
}