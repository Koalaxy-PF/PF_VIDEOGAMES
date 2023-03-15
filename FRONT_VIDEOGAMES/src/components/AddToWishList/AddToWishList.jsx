import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostWishList } from "../../redux/actions/actions";

export default function AddToWishList({productId}){
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user)

    const [added] = useState(false)

    const AddToWL = (e) => {
        e.preventDefault();

        if(Object.entries(User).lenght === 0){
            alert("El usuario no está registrado")
        } else {

            console.log(productId, 'pID');
            console.log(User, 'uID');

            const obj = {
                userId: User.id,
                productId: productId,
            }

            dispatch(PostWishList(obj)).then((response) => {
                alert('Juego añadido a la wishlist')
            }).catch((response) => {
                alert('No se ha podido añadir a la Wishlist')
            })
        }
    }


    return(
        <div>
            <button className="" onClick={(e) => AddToWL(e)} ><ion-icon name="heart"></ion-icon></button>
        </div>
    )
}