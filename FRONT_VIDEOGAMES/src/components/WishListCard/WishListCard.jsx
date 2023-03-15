import React from "react";

export default function WishListCard ({name, img, calification, price, genre}) {

    const DeleteFromWL = (e) => {
        e.preventeDefault();

        
    }

    return(
        <div className="">
                <div class='grid grid-cols-3 m-auto rounded bg-green-300/50  h-[270px]'>
                    <div class='mx-[20px] my-[7px] w-[420] '>
                    <img class='w-[400px] h-[250px] object-fit rounded' src={img} alt="" />
                    </div>
                    <div class='justify-center text-start'>
                        <h1 class='text-[25px] relative top-[10px] font-bold'>{name}</h1>
                        <div className="bg-gray-500 rounded-md w-40 h-12 mt-24 text-center text-xl flex items-center justify-around ">
                            <a className="text-white font-semibold">PRICE: </a>
                            <a className="text-yellow-400">${price} </a>
                        </div>
                    </div>
                    <div class='items-center my-[80px] ml-[200px] justify-center text-left  '>
                        
                    </div>
                    <div>

                    </div>
            </div>
        </div>
    );
}