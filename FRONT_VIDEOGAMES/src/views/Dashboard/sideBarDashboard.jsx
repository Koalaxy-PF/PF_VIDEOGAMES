import React from "react";
import users from "../../assets/icons/users.png"
import games from "../../assets/icons/games.png"


export default function SideBarDashBoard(){

    return(
        <div className="bg-gray-900 h-full ">

            <div className="flex flex-col justify-center item-center p-8 gap-2 h-[30vh]">
                <img src="https://img.freepik.com/foto-gratis/joven-feliz-pie-aislado_171337-1127.jpg?w=2000" className="w-20 h-20 objet-cover rounded-full"/>
                <h1 className="text-white text-2xl font-bolt">Facundo</h1>
                <p className="text-white text-xl font-bolt bg-gray-200 py-1 px-3 rounded-full">Admin</p>
            </div>

            <nav className="bg-gray-500 p-8 rounded-tr-[100px] h-[70vh]">
                <a className="text-white text-xl font-bolt flex item-center justify-center gap-4 py-2 px-4 hover:bg-gray-600 rounded-xl"> Games <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600  p-1"src = {games}/></a>
                <a className="text-white text-xl font-bolt flex item-center justify-center gap-4 py-2 px-4 hover:bg-gray-600 rounded-xl"> Users <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600  p-1"src = {users}/></a>
            </nav>
        </div>
    )
}