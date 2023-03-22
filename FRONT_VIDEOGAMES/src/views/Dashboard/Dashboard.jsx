import React , {useEffect} from "react";
import profile from '../../assets/dashboard/profile.png';
import hogwarts from '../../assets/dashboard/hogwarts.jpg';
import logo from '../../assets/icons/koalaLogo.png'
import SideBarDashBoard from "./sideBarDashboard";
import CardsDashBoard from "./ContainerCardDashBoard";
import { useSelector , useDispatch } from "react-redux";
import GamesDashBoard from "./Games/ContainerGamesDashBoard";
import { GetUsers } from "../../redux/actions/actions";
import { Link } from "react-router-dom";


export default function Dashboard() {
  const allGames = useSelector((state) => state.GamesCopy);
  const allUsers = useSelector((state)=> state.users)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetUsers());
    
  }, [dispatch]); 

  return (
    <div class='grid grid-cols-6 min-h-screen overflow-y-hidden'>
      <div class='col-span-1 bg-slate-400 text-center w-full'>
        <SideBarDashBoard/>
      </div>
      <div class='col-span-5 items-center relative' style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
        <div class='mx-[30px] mt-[20px] bg-white mb-[20px] p-[10px] rounded flex items-center'>
          <img class='w-[50px]' src={logo} alt="" />
        <h1 class='font-bold ml-[10px] text-[25px]'>DashBoard Admin</h1>
        <span class='relative left-[680px] text-[20px]'><ion-icon name="notifications"></ion-icon></span>
        </div>

        <div class='flex justify-around relative bottom-[10px]'>
        <div class='justify-center text-center bg-white py-[20px] rounded'>
        <div class='flex justify-around'>
        <h1 class='relative right-[48px] font-bold text-[20px]'>Games</h1>
        <span class='relative left-[60px]'><ion-icon name="game-controller"></ion-icon>{allGames.length}</span>
        </div>
        <div class='flex text-left bg-white items-center justify-around py-[10px] mt-[10px] flex-wrap w-[500px]'>
          <CardsDashBoard/>
        </div>
        <div>
          <Link to='/Games'><button class='py-[10px] px-[10px] mt-[20px] rounded border-blue-900 border-[1px]'>See all the games</button></Link>
        </div>
      </div>

      <div class='justify-center text-center bg-white py-[20px] rounded w-[500px]'>
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
      </div>
    </div>
  )
}
