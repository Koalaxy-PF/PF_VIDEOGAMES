import React from "react";
import info from '../../assets/card/info.png'
import forest from '../../assets/card/forest.jpg'
import heart from '../../assets/card/heartBlue.png'
import carrito from '../../assets/card/carrito.png'
import starWhite from '../../assets/card/starWhite.png'
import starBlue from '../../assets/card/starBlue.png';
import style from './card.module.css';


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
        // <div className={style.card} class='justify-center m-auto flex flex-wrap my-[50px] ml-[210px] bg-[#f6f6f6] pb-[50px]'>
        //     <div className={style.content} class='bg-white rounded-lg h-[300px] mx-[10px]'>
        //      <button><img class='w-[20px] text-right relative left-[265px] bg-black z-30 top-[5px]'  src={heart} alt="" /></button>
        //     <img class='w-[300px] relative bottom-[30px] rounded-t-lg' src={forest} alt="" />
        //     <ul class='flex relative bottom-[52px] left-[210px]'>
        //         <li><img class='w-[16px]'  src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //     </ul>
        //     <h3 class= 'pl-[20px] text-[25px] mb-[30px] relative bottom-[20px]'>Sons of the forest</h3>
        //     <button><img class='h-[30px] relative left-[250px] bottom-[20px]' src={carrito} alt="" /></button>
        //     <h5 class='pl-[20px] relative bottom-[40px]'>$20.000 COP</h5>
        //     </div>
        //     <div class='bg-white rounded-lg h-[300px] mx-[10px]'>
        //      <button><img class='w-[20px] text-right relative left-[265px] bg-black z-30 top-[5px]'  src={heart} alt="" /></button>
        //     <img class='w-[300px] relative bottom-[30px] rounded-t-lg' src={forest} alt="" />
        //     <ul class='flex relative bottom-[52px] left-[210px]'>
        //         <li><img class='w-[16px]'  src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //     </ul>
        //     <h3 class= 'pl-[20px] text-[25px] mb-[30px] relative bottom-[20px]'>Sons of the forest</h3>
        //     <button><img class='h-[30px] relative left-[250px] bottom-[20px]' src={carrito} alt="" /></button>
        //     <h5 class='pl-[20px] relative bottom-[40px]'>$20.000 COP</h5>
        //     </div>

        //     <div class='bg-white rounded-lg h-[300px] mx-[10px]'>
        //      <button><img class='w-[20px] text-right relative left-[265px] bg-black z-30 top-[5px]'  src={heart} alt="" /></button>
        //     <img class='w-[300px] relative bottom-[30px] rounded-t-lg' src={forest} alt="" />
        //     <ul class='flex relative bottom-[52px] left-[210px]'>
        //         <li><img class='w-[16px]'  src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starWhite} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //         <li><img class='w-[16px]' src={starBlue} alt="" /></li>
        //     </ul>
        //     <h3 class= 'pl-[20px] text-[25px] mb-[30px] relative bottom-[20px]'>Sons of the forest</h3>
        //     <button><img class='h-[30px] relative left-[250px] bottom-[20px]' src={carrito} alt="" /></button>
        //     <h5 class='pl-[20px] relative bottom-[40px]'>$20.000 COP</h5>
        //     </div>

        // </div>
        <div class='flex h-[500px]'>
            <div className={style.card}>
  <div className={style.card2}>
  </div>
</div>

<div className={style.card}>
  <div className={style.card2}>
  <img  src={forest} alt="" />
  </div>
</div>

<div className={style.card}>

  <div className={style.card2}>
  </div>
</div>
        </div>

    )
}

    )
}