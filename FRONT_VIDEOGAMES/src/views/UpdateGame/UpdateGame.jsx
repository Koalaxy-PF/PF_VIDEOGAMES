import React from "react";
import logo from '../../assets/icons/koalaLogo.png';
import FormUpdateGame from "../../../src/components/FormUpdateGame/FormUpdateGame";
import SideBarDashBoard from "../Dashboard/sideBarDashboard";
import { Link } from "react-router-dom";



export default function UpdateGame() {
  return (
    <div class='grid grid-cols-6 min-h-screen overflow-y-hidden '>
      <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
      </div>
      <div class='col-span-5 bg-gray-200 items-center relative'>
        <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
        <Link to='/DashBoard'><img class='w-[50px]' src={logo}  alt="" /></Link>
        <h1 class='font-bold ml-[10px] text-[25px]'>Update games</h1>
        </div>
        <div class='text-center'>
        <FormUpdateGame/>
      </div>
      </div>
    </div>
  )
}