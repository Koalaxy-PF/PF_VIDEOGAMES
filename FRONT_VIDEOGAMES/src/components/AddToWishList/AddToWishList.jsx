import React, { useEffect, useState } from "react";
import { PostWishList } from "../../redux/actions/actions";

export default function AddToWishList({productId}){
    const [added] = useState(false)


const handleClick = () => {
    dispatch(PostWishList())
}

    return(
        <div>
            <button className=""><ion-icon name="heart"></ion-icon></button>
        </div>
    )
}