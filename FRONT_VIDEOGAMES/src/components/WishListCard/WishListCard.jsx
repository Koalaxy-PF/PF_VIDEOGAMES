import React from "react";

export default function WishListCard ({name, img, calification, price, genre}) {
    return(
        <div>
            <div>
                <div class='flex'>
                    <img class='w-[400px]' src={img} alt="" />
                    <div class='flex'>
                        <h1 class='px-[20px]'>{name}</h1>
                    </div>
                    <div>
                        <p>{calification}</p>
                        <p>{genre}</p>
                    </div>
                    <div>
                        <h5>{price}</h5>
                    </div>

                </div>
            </div>
        </div>
    );
}