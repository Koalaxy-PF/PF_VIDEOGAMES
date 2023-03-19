import React from "react";
import { useSelector } from "react-redux";
import SideBarDashBoard from "./sideBarDashboard";
import CardUserDashBoard from "./CardUserDashBoard";
import {GetUsers} from "../../redux/actions/actions"
import logo from '../../assets/icons/koalaLogo.png'


export default function DashBoardUser(){

    const allUsers = useSelector((state) => state.users);

    <div class='grid grid-cols-6 min-h-screen '>

        <div class='col-span-1 bg-slate-400 text-center w-full'>
            <SideBarDashBoard/>
        </div>

        <div class='col-span-5 bg-gray-200 items-center relative'>

            <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
                <img class='w-[50px]' src={logo} alt="" />
                <h1 class='font-bold ml-[10px] text-[25px]'>DashBoard Users Admin</h1>
                <span class='relative left-[680px] text-[20px]'><ion-icon name="notifications"></ion-icon></span>
            </div>

            <div class='flex justify-around relative bottom-[10px]'>

                <div class='justify-center text-center bg-white py-[20px] rounded'>
                <div class='flex justify-around'>
                <h1 class='relative right-[48px] font-bold text-[20px]'>Users</h1>
                <span class='relative left-[60px]'>{allUsers.user.length}</span>
                </div>
                <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px] flex-wrap w-[500px]'>
                <CardUserDashBoard/>
                </div>
                <div>
                <button class='py-[10px] px-[10px] mt-[20px] rounded border-blue-900 border-[1px]'>See all the games</button>
                </div>
                </div>

            </div>
            

        </div>



    </div>


}