import React from "react";
import { useSelector } from "react-redux";
import SideBarDashBoard from "./sideBarDashboard";
import CardUserDashBoard from "./CardUserDashBoard";

useEffect(() => {
    dispatch(GetGames());
  }, [dispatch]); 

export default function DashBoardUser(){

    const allUsers = useSelector((state) => state.users);

    <div class='grid grid-cols-6 min-h-screen '>

        <div class='col-span-1 bg-slate-400 text-center w-full'>
            <SideBarDashBoard/>
        </div>

        <div class='col-span-5 bg-gray-200 items-center relative'>

            

        </div>



    </div>


}