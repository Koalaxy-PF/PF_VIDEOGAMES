import React from "react";

export default function WishListCard ({name, img, calification, price, genre}) {
    return(
        <div>
                <div class='grid grid-cols-3 m-auto'>
                    <div class='mx-[20px]'>
                    <img class='w-[400px] h-[250px] object-cover rounded' src={img} alt="" />
                    </div>
                    <div class='justify-center text-center'>
                        <h1 class='text-[25px] relative top-[10px]'>{name}</h1>
                    </div>
                    <div class='block items-center my-[80px] ml-[200px]'>
                        <p>{calification}</p>
                        <p>{genre}</p>
                        <h5>{price}</h5>
                    </div>
                    <div>

                    </div>
            </div>
        </div>
    );
}