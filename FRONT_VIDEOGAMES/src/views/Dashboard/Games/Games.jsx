import React from "react";
import GamesDashBoard from "./ContainerGamesDashBoard";
import SideBarDashBoard from "../sideBarDashboard";
import logo from '../../../assets/icons/koalaLogo.png';
import { Link } from "react-router-dom";
import SearchBar from "../../../components/SearchBar/SearchBar";





export default function Games() {
  return (
    <div class='grid grid-cols-6 min-h-screen overflow-y-hidden '>
      <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
      </div>
      <div class='col-span-5 bg-gray-200 items-center relative'>
        <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
          <Link to='/DashBoard'><img class='w-[50px]' src={logo}  alt="" /></Link>
        <h1 class='font-bold ml-[10px] text-[25px]'>DashBoard Games</h1>
        <div class='ml-[130px] flex'>
            <SearchBar/>
        </div>
        <Link to='/CreateGame'><div class='flex items-center relative left-[190px]'>
        <span class='text-[30px] relative top-[2px] text-blue-700'><ion-icon name="add-circle"></ion-icon></span>
        <p class='ml-[2px] font-bold'>Create new game</p>
        </div></Link>
        </div>
        <div class='text-center'>
        <GamesDashBoard/>
      </div>
      </div>
    </div>
  )
}
