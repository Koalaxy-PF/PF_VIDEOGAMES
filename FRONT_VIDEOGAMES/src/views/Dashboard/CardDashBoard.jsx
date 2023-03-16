import React from "react";
import AddToWishList from "../../components/AddToWishList/AddToWishList";



 export default function CardDashBoard({index, id, name, img, calification, price, genre}) {
  return (
    <div class="flex h-[350px] mx-[20px]">
      <div>
      <div>
       <img src={img} alt=" " width={"300px"} height={"200px"} />
       <div>
       <h1 class="text-[21px] text-left ml-[10px] mt-[10px]">{name}</h1>
       </div>

       <div class='flex flex-wrap ml-[10px] mt-[5px]'>
       <p class='w-full text-left'><strong>{calification}/5 <span class='text-[#00E1D8] relative top-[1px] left-[2px]'><ion-icon name="star"></ion-icon></span> </strong></p>
           {/*  <p class='w-full text-left'>Stock: <strong>{stock}</strong></p> */}
        <div>
          <AddToWishList 
          productId={id}
          />
        </div>
             <p class='w-full text-left'>{genre}</p>  


       </div>

       <div class='text-right'> 
       <h5 class='text-right text-whit'><span class='bg-gray-300 px-[10px] py-[4px] rounded-l reounde-t'>$ {price}</span></h5>
       </div>

         </div>
       </div>
     </div>
    
  );
 }