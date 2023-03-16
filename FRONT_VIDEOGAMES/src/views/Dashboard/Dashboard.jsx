import React from "react";
import profile from '../../assets/dashboard/profile.png'

export default function Dashboard() {
  return (
    <div class='grid grid-cols-6 min-h-screen'>
      <div class='col-span-1 bg-slate-400'>
        <h1>SideBar</h1>
      </div>
      <div class='col-span-5 bg-red-300'>
        <div class='mx-[50px] mt-[20px]'>
        <h1>DashBoard</h1>
        </div>
        <div class='flex justify-around'>
        <div class='flex justify-around'>
        <span><ion-icon name="create"></ion-icon></span>
        <h1>You Can Edit Games and Users</h1>
      </div>
      <div class='justify-center text-center'>
        <div class='flex justify-around'>
        <h1 class='relative right-[50px]'>Users</h1>
        <span class='relative left-[60px]'><ion-icon name="people"></ion-icon>15</span>
        </div>
        <div class='flex text-left bg-blue-800 items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Signed since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-blue-800 items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Signed since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>

        <div class='flex text-left bg-blue-800 items-center justify-around py-[10px] mt-[10px]'>
          <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px]' src={profile}></img>
          <div>
          <h5 class='mr-[200px] text-[15px]'>Name</h5>
          <h5 class='text-[12px]'>Signed since:</h5>
          </div>
          <span class='mr-[30px]'><ion-icon name="create"></ion-icon></span>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}
