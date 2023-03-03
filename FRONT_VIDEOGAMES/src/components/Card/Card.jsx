import React from "react";
/* import info from "../../assets/card/info.png";
import forest from "../../assets/card/forest.jpg";
import heart from "../../assets/card/heartBlue.png";
import carrito from "../../assets/card/carrito.png";
import starWhite from "../../assets/card/starWhite.png";
import starBlue from "../../assets/card/starBlue.png"; */
import style from "./card.module.css";

 export default function Card({name, img, calification, price, stock}) {
  return (
    <div class="flex h-[350px]">
      <div className={style.card}>
      <div className={style.card2}>
       <img src={img} alt=" " width={"300px"} height={"200px"} />
       <ul class="flex relative bottom-[20px] left-[165px]">
            <li>
              <img class="w-[15px]" src={img} alt="" />
            </li>
            </ul>
       
           <h1 class="px-[20px] text-2xl">{name}</h1>
           <h5>{price}</h5>
          <div>
            <p>
              Description <strong>{calification}</strong>             
            </p>
          </div>
          <div>
            <p>
              Stock <strong>{stock}</strong>             
            </p>
          </div>
         </div>
       </div>
     </div>
    
  );
 }

/* export default function Card({name, img, calification, price, stock}) {
  return (
    <div class="flex h-[350px]">
      <div className={style.card}>
        <div className={style.card2}>
          <img className={style.forest} src={img} alt="" />
          <ul class="flex relative bottom-[20px] left-[165px]">
            <li>
              <img class="w-[15px]" src={img} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
          </ul>
          <h1 class="px-[20px] text-2xl">Sons of the forest</h1>
          <button>
            <img
              class="w-[50px] relative left-[202px] top-[20px]"
              src={carrito}
              alt=""
            />
          </button>
          <h2 class="px-[20px] relative top-[20px]">$20.000 COP</h2>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.card2}>
          <img className={style.forest} src={forest} alt="" />
          <ul class="flex relative bottom-[20px] left-[165px]">
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
          </ul>
          <h1 class="px-[20px] text-2xl">Sons of the forest</h1>
          <button>
            <img
              class="w-[50px] relative left-[202px] top-[20px]"
              src={carrito}
              alt=""
            />
          </button>
          <h2 class="px-[20px] relative top-[20px]">$20.000 COP</h2>
        </div>
      </div>

      <div className={style.card}>
        <div className={style.card2}>
          <img className={style.forest} src={forest} alt="" />
          <ul class="flex relative bottom-[20px] left-[165px]">
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starWhite} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
            <li>
              <img class="w-[15px]" src={starBlue} alt="" />
            </li>
          </ul>
          <h1 class="px-[20px] text-2xl">{name}</h1>
          <button>
            <img
              class="w-[50px] relative left-[202px] top-[20px]"
              src={carrito}
              alt=""
            />
          </button>
          <h2 class="px-[20px] relative top-[20px]">{price}</h2>
        </div>
      </div>
    </div>
  );
}
 */