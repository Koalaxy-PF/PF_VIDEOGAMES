import React from "react";





 export default function CardDashBoard({index, id, name, img, calification, price, genre}) {
  return (
    <div class='flex text-left bg-white items-center justify-around py-[10px] pt-[10px] w-[500px]'>
    <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={img}></img>
    <div class='w-[200px] bg-white'>
    <h5 class='mr-[200px] text-[15px] w-[200px]'>{name}</h5>
    <h5 class='text-[12px]'>${price}</h5>
    </div>
    <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
  </div>
    
  );
 }
