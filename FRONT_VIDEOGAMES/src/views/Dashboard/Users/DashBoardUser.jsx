import React ,{useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import SideBarDashBoard from "../sideBarDashboard";
import {GetUsers} from "../../../redux/actions/actions";
import logo from '../../../assets/icons/koalaLogo.png'
import CardUserDashBoard from "./CardsUserDashBoard";


export default function DashBoardUser(){

    // const dispatch = useDispatch();
    // const allUsers = useSelector((state) => state.users);

    // useEffect(() => {
    //     dispatch(GetUsers());
    //   }, [dispatch]); 

  return(
    <div class='grid grid-cols-6 min-h-screen overflow-y-hidden '  >

    <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
    </div>

    <div class='col-span-5 items-center relative' style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}} >

        <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
            <img class='w-[50px]' src={logo} alt="" />
            <h1 class='font-bold ml-[10px] text-[25px]'>DashBoard Users Admin</h1>
          
        </div>

        <div class='flex justify-around relative bottom-[10px]'>

            <div class='justify-center text-center bg-white py-[20px] rounded'>
            <div class='flex justify-around'>
            <h1 class='relative right-[48px] font-bold text-[20px]'>Users</h1>
            </div>

            <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px] flex-wrap w-[1000px]'>
                
                <CardUserDashBoard/>

            </div>

            </div>

        </div>
        

    </div>

  </div>
  )
}
