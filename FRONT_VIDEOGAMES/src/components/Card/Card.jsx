import React from "react";
import info from '../../assets/card/info.png'


// export default function Card({ name, image, price, description }) {
//   return (
//     <div>
//       <img  src={image} alt=" " width={"300px"} height={"200px"} />
//       <div>
//         <h3>{name}</h3>
//         <div>
//           <h5>{price}</h5>
//           <div>
//             <p>
//               Description <strong>{description}</strong>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function Card (){
    return (
        <div class='justify-center m-auto flex flex-wrap my-[50px] ml-[210px]'>
            <div class='mx-[10px] p-[50px] border border-solid border-black rounded '>
             <button><img class='w-[20px] text-right relative left-[195px] bottom-[20px]' src={info} alt="" /></button>
            <h1 class ='text-center mb-[40px] border border-solid border-black rounded p-[80px]'>Imagen</h1>
            <h3>Name</h3>
            <h5>Price</h5>
            <p>Description</p>
            </div>

            <div class=' mx-[10px] p-[50px] border border-solid border-black rounded'>
            <button><img class='w-[20px] text-right relative left-[195px] bottom-[20px]' src={info} alt="" /></button>
            <h1 class ='text-center mb-[40px] border border-solid border-black rounded p-[80px]'>Imagen</h1>
            <h3>Name</h3>
            <h5>Price</h5>
            <p>Description</p>
            </div>

            <div class='mx-[10px] p-[50px] border border-solid border-black rounded'>
            <button><img class='w-[20px] text-right relative left-[195px] bottom-[20px]' src={info} alt="" /></button>
            <h1 class ='text-center mb-[40px] border border-solid border-black rounded p-[80px]'>Imagen</h1>
            <h3>Name</h3>
            <h5>Price</h5>
            <p>Description</p>
            </div>

        </div>
    )
}