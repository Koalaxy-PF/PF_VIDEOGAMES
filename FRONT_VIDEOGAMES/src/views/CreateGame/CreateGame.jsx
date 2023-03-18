import React from "react";
import logo from '../../assets/icons/koalaLogo.png';
import CreateGame from "../../components/FormCreateGame/FormCreateGame";
import SideBarDashBoard from "../Dashboard/sideBarDashboard";



export default function Games() {
  return (
    <div class='grid grid-cols-6 min-h-screen overflow-y-hidden '>
      <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
      </div>
      <div class='col-span-5 bg-gray-200 items-center relative'>
        <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
          <img class='w-[50px]' src={logo}  alt="" />
        <h1 class='font-bold ml-[10px] text-[25px]'>Create games</h1>
        </div>
        <div class='text-center'>
        <CreateGame/>
      </div>
      </div>
    </div>
  )
}
