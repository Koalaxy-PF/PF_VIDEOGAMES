import React, {useState}from "react";
import { Link } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import koala from "../../assets/logo/logo.png"
import { BsFillMoonFill, BsFillSunFill, BsFillDisplayFill } from "react-icons/bs";
import { useEffect } from "react";

export default function NavBar(){

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : "system");
  const element = document.documentElement;

  useEffect(() => {

    switch(theme){

      case 'dark':
        element.classList.add('dark');
        window.localStorage.setItem('theme', 'dark')
        break;
      
      case 'light':
        element.classList.remove('dark');
        window.localStorage.setItem('theme', 'light');
        break;
      
      default:
        window.localStorage.removeItem('theme');
        break;    
    }
  }, [theme])



  const iconComponents = [
    {
      text: 'light',
      icon: <BsFillSunFill />},
      {
        text: 'dark',
        icon:  <BsFillMoonFill />},
      {
      text: 'system',
      icon: <BsFillDisplayFill />},
  ]

    return(
        <div className="">
          <div class="flex item-center justify-between bg-slate-100 py-3 px-2">

            <div class="flex item-center text-black  ">
              <Link to= "/"><img  class= "z-10   h-12  item-center text-black text-center" src={`${koala}`}/> </Link>
            </div>

            <ul className={`bg-white  justify-between  item-center right-0  flex  pl-9`}>

            <div className="bg-gray-300  duration-100 pl-2 rounded-full">
                {
                  iconComponents?.map((element) => {
                    return (
                    <button onClick={() => setTheme(element.text)} key={element.text} 
                            className={`w-8 h-8  text-gray-500 text-xl  m-1 rounded-full mt-2 ${theme === element.text && "text-gray-900"}`}>
                      {element.icon}
                    </button>
                    )
                  })
                }
              </div> 
              
              <li>
                <Link to= "/login">
                  <a class="block lg:inline-block lg:mt-0 mr-3">
                    <img className="w-8 h-8 mt-2 ml-2 rounded-full" src = {user}/>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
    )
}