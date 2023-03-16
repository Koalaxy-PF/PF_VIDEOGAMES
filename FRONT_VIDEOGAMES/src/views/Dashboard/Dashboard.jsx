import React from "react";
import profile from '../../assets/dashboard/profile.png';
import hogwarts from '../../assets/dashboard/hogwarts.jpg';
import logo from '../../assets/icons/koalaLogo.png'
import SideBarDashBoard from "./sideBarDashboard";


export default function Dashboard() {
  return (
    <div class='grid grid-cols-6 min-h-screen'>
      <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
      </div>
      <div class='col-span-5 bg-gray-200 items-center'>
        <div class='mx-[50px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
          <img class='w-[50px]' src={logo} alt="" />
        <h1 class='font-bold ml-[10px] text-[25px]'>DashBoard Admin</h1>
        <span class='relative left-[680px] text-[20px]'><ion-icon name="notifications"></ion-icon></span>
        </div>

        <div class='flex justify-around'>
        <div class='justify-center text-center bg-white py-[20px] rounded'>
        <div class='flex justify-around'>
        <h1 class='relative right-[48px] font-bold text-[20px]'>Games</h1>
        <span class='relative left-[60px]'><ion-icon name="game-controller"></ion-icon>200</span>
        </div>
        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={hogwarts}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Calification</h5>
          <h5 class='text-[12px]'>Price</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={hogwarts}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Calification</h5>
          <h5 class='text-[12px]'>Price</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={hogwarts}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Calification</h5>
          <h5 class='text-[12px]'>Price</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>
        <div>
          <button class='py-[10px] px-[10px] mt-[20px] rounded border-blue-900 border-[1px]'>See all the Games</button>
        </div>
      </div>

      <div class='justify-center text-center bg-white py-[20px] rounded'>
        <div class='flex justify-around'>
        <h1 class='relative right-[48px] font-bold text-[20px]'>Users</h1>
        <span class='relative left-[60px]'><ion-icon name="people"></ion-icon>50</span>
        </div>
        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Registered since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Registered since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Registered since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>
        <div>
          <button class='py-[10px] px-[10px] mt-[20px] rounded border-blue-900 border-[1px]'>See all the users</button>
        </div>
      </div>
        </div>

        <div class='mt-[50px] bg-white mx-[87px] py-[50px] mb-[50px]'>
          <h1 class='text-center'>Most Selled Games</h1>
        </div>
      </div>
    </div>
  )
}
