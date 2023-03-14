import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PostWishList } from "../../redux/actions/actions";

export default function AddToWishList({productId}){
    const dispatch = useDispatch();
    const User = useSelector((state) => state.user)

    const [added] = useState(false)


const handleClick = (e) => {
    e.preventDefault();
    const userId = User.id;

    dispatch(PostWishList(productId, userId
    ));
    alert('Product added successfully');
}

    return(
        <div>
            <button className="" onClick={(e) => handleClick(e)} ><ion-icon name="heart"></ion-icon></button>
        </div>
    )
}