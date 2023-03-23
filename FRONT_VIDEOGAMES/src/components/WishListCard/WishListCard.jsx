import React from "react";
import { DeleteWishListProduct, GetWishList } from "../../redux/actions/actions";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function WishListCard ({id, name, img, calification, price, genre}) {

    const User = useSelector((state) => state.user)
    const dispatch = useDispatch()
    const DeleteFromWL = (id) => {
        console.log(id);
        dispatch(DeleteWishListProduct(id)).then((response) =>{
            Swal.fire({
                icon: 'Success',
                title: response.data.message,
                text: 'El producto se eliminó!',
        }).then(() => {
            dispatch(GetWishList(User.user.id))
        })
        }).catch((response) => {
            Swal.fire({
                icon: 'error',
                title: response.message,
                text: 'El producto no se eliminó!',
       })})
    }

    return(
        <div className="">
                <div class='ml-1 grid grid-cols-3 m-auto rounded-lg h-[200px] max-w-7xl bg-gray-900 '>
                    <div class='col-span-2 rounded-l-lg -ml-1  w-full h-full bg-cover bg-left bg-no-repeat ' 
                    style={{ backgroundImage: `linear-gradient(-90deg, rgba(0, 0, 0, 0), rgba(17, 24, 39, 1)), url(${img})` }}>
                    {/* <img class='w-[400px] h-[250px] object-fit rounded bg-gradient-to-r from-transparent to-gray-300' src={img} alt="" /> */}
                    
                    <div class='ml-2 justify-center text-start text-white drop-shadow-xl'>
                        <h1 class='text-[25px] relative top-[10px] font-bold'>{name}</h1>
                        <div className="bg-gray-700 rounded-md w-40 h-12 mt-24 text-center text-xl flex items-center justify-around ">
                            <a className="text-white font-semibold">PRICE: </a>
                            <a className="text-yellow-400">${price} </a>
                        </div>
                    </div>
                    </div>
                    <div class='grid content-evenly'>

                    <div class='items-center  justify-center text-center text-xl font-semibold text-white '>
                        <Link to={"/products/" + id}>
                        <button class='rounded w-36 h-10 bg-gray-600'>Detail</button>
                        </Link>
                    </div>
                    <div class='items-center  justify-center text-center text-xl font-semibold text-white '>
                        <button onClick={() => DeleteFromWL(id)} class='rounded w-36 h-10 bg-gray-600'>Delete</button>
                    </div>
                    </div>
                
                </div>
        </div>
    );
}