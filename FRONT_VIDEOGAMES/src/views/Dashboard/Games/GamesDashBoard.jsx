import React, { useEffect, dis } from "react";
import { useDispatch } from "react-redux";
import { GetGames, DeleteGame } from "../../../redux/actions/actions";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";





 export default function GameDashBoard({index, id, name, img, calification, price, genre}) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetGames())
}, []);

const DeleteGameId = (id) => {

    
        dispatch(DeleteGame(id)).then((resp) => {
            Swal.fire({
                icon: 'sucess',
                title: resp.data.message,
                text: 'Game was removed!',
        }).then(() => {
            dispatch(GetGames());
        })}).catch((resp) => {
            Swal.fire({
                icon: 'error',
                title: resp.data.message,
                text: 'Game not deleted!',
       })})
}
  return (
    <div class='flex text-left bg-white items-center justify-around py-[15px] w-[1070px] rounded'>
    <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={img}></img>
    <div class='w-[200px] bg-white'>
    <h5 class='mr-[200px] text-[15px] w-[200px]'>{name}</h5>
    <h5 class='text-[12px]'>${price}</h5>
    </div>
    <div class='flex'>
    <Link to={`/Update/${id}`}><span class='mr-[30px] text-[20px]'><ion-icon name="create"></ion-icon></span></Link>
    <button className='close text-[20px]' onClick={(e)=>DeleteGameId(id)}><ion-icon name="trash-bin-outline"></ion-icon></button>
    {}
    </div>
  </div>
    
  );
 }
