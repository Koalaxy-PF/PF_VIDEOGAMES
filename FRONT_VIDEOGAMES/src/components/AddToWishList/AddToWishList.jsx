import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PostWishList } from "../../redux/actions/actions";

export default function AddToWishList({productId}){
    const User = useSelector((state) => state.user)

    const [added] = useState(false)


const handleClick = (e) => {
    dispatch(PostWishList(e))
}

    return(
        <div>
            <button className=""><ion-icon name="heart"></ion-icon></button>
        </div>
    )
}