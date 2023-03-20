import React from "react";
import { useSelector } from "react-redux"
import users from "../../assets/icons/users.png"
import games from "../../assets/icons/games.png"
import home from "../../assets/icons/home.png"
import { Link } from "react-router-dom"
import user from "../../assets/icons/usuario.png"

export default function SideBarDashBoard(){

    const User = useSelector((state) => state.user);

    return(
        <div className="bg-gray-900 h-full  fixed  lg:static w-[100%] top-0 left-0 ">


            {
                 Object.keys(User).length === 0 ?

                 <div className="justify-center item-center  flex flex-col p-8 gap-2 h-[30vh] place-content-center px-20">
                 <img src={user} className="w-20 text-center  h-20 objet-cover  rounded-full ring-2 ring-gray-300"/>
                 <h1 className="text-white text-2xl font-bolt text-center">Usuario</h1>
                 <p className="text-white text-xl font-bolt bg-gray-200 py-1 px-3 rounded-full text-center">Admin</p>
                 </div>

                 :

                 <div className="justify-center item-center  flex flex-col p-8 gap-2 h-[30vh] place-content-center px-20">
                 <img src={User.user.img} className="w-20 text-center  h-20 objet-cover  rounded-full ring-2 ring-gray-300"/>
                 <h1 className="text-white text-2xl font-bolt text-center">{User.user.name}</h1>
                 <p className="text-white text-xl font-bolt bg-gray-200 py-1 px-3 rounded-full text-center">Admin</p>
                </div>

            }


            {/* {User.user?.map((e) =>{
                return(

            <div className="flex flex-col justify-center item-center p-8 gap-2 h-[30vh] ">
                <img src={e.img} className="w-20 item-center justify-center h-20 objet-cover  rounded-full ring-2 ring-gray-300"/>
                <h1 className="text-white text-2xl font-bolt text-center">{e.name}</h1>
                <p className="text-white text-xl font-bolt bg-gray-200 py-1 px-3 rounded-full text-center">Admin</p>
            </div>

                )

                })

            } */}

            <div className="bg-gray-500 p-8 rounded-tr-[100px] h-full">
                <nav className="flex flex-col gap-4">
                    <Link to='/Dashboard'> <a className="text-white text-xl font-bolt flex item-center justify-center gap-4 py-2 px-4 hover:bg-gray-600 rounded-xl"> Home <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600  p-1"src = {home}/></a></Link>
                    <Link to='/Games'><a className="text-white text-xl font-bolt flex item-center justify-center gap-4 py-2 px-4 hover:bg-gray-600 rounded-xl"> Games <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600  p-1"src = {games}/></a></Link>
                    <Link to='/Dashboard/users'><a className="text-white text-xl font-bolt flex item-center justify-center gap-4 py-2 px-4 hover:bg-gray-600 rounded-xl"> Users <img  class= " z-10 inset-y-0 my-auto h-10  hover:bg-gray-600  p-1"src = {users}/></a></Link>
                </nav>
            </div>

        </div>
    )
}