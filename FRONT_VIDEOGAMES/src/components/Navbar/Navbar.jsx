import React, {useState}from "react";
import { Link, useNavigate } from "react-router-dom"; //maneja todas las rutas de la aplicacion
import heart from "../../assets/icons/corazon.png"
import trolley from "../../assets/icons/carrito-de-compras.png"
import user from "../../assets/icons/usuario.png"
import koala from "../../assets/logo/logo.png"
import koalaWhite from '../../assets/logo/LogoBco.png'
import { BsFillMoonFill, BsFillSunFill, BsFillDisplayFill } from "react-icons/bs";
import { useEffect } from "react";
import { useSelector } from "react-redux"
import Logout from '../../assets/icons/LogOut.png'
import AuthService from "../../services/Auth.service";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/actions/actions";

export default function NavBar(){

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem("theme") : "system");
  const element = document.documentElement;
  const dispatch = useDispatch();
  const [change, setChange] = useState(null);
  const navigate = useNavigate();
  
  const User = useSelector((state) => state.user)

  
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

  const handleLogOut = () => {
    dispatch(LogOut());
  }


    return(
        <div className="">
          <div class="flex item-center justify-between bg-slate-100 py-3 px-2 dark:bg-[#17202A]">

            <div class="flex item-center text-black">
              <Link to= "/Home">
                <img  class= "h-12 item-center text-center" src={theme === "dark" ? `${koalaWhite}` : `${koala}` }/> 
              </Link>
            </div>

            <ul className={`  justify-between  item-center right-0  flex  pl-9`}>

            <div className="bg-gray-300 dark:text-[#17202A] duration-100 pl-2 rounded-full mr-1">
                {
                  iconComponents?.map((element) => {
                    return (
                    <button onClick={() => setTheme(element.text)} key={element.text} 
                            className={`w-8 h-8 text-gray-900 text-xl m-1 rounded-full mt-2 ${theme === element.text && "text-amber-400"}`}>
                      {element.icon}
                    </button>
                    )
                  })
                }
              </div> 
              
              <li>

                {
                  Object.keys(User).length === 0 ?
                  <Link to= "/login">
                    <a class="block lg:inline-block lg:mt-0 mr-1">
                      <img className="w-8 h-8 mt-2 ml-2 rounded-full" src = {user} />
                    </a>
                  </Link>

                  :

                  <Link to= "/Profile">
                    <a className="blck lg:inline-block lg:mt-0 mr-1">
                      <img className="w-8 h-8 mt-2 ml-2 rounded-full" src = {User.user.img} />
                    </a>
                  </Link>                  
                }
              </li>

              <li>

                {
                  Object.keys(User).length !== 0 &&
                  
                    <div className="blck lg:inline-block lg:mt-0 mr-3">
                      <img onClick={() => handleLogOut()} className="w-8 h-8 mt-2 ml-2 rounded-full cursor-pointer" src = {Logout} />
                    </div>             
                }
              </li>


            </ul>
          </div>
        </div>
    )
}