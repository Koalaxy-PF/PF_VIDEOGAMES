import React ,{useEffect}from "react";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {GetUsers , DeleteUserDashBoard} from "../../../redux/actions/actions";
import Delete from "../../../assets/icons/delete.png"


export default function CardUserDashBoard(){

    
    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(GetUsers());
      }, [dispatch]); 

    const DeleteUser = (id) =>{

        dispatch(DeleteUserDashBoard( users.id)).then((resp) => {
            Swal.fire({
                icon: 'sucess',
                title: resp.data.message,
                text: 'El usuario se eliminó!',
        })
        })
    }

   


    return(
        <div>

            
            <div class=' flex flex-wrap justify-center'>
            {allUsers?.map((e) => {
            return(

                    <div class='flex text-center bg-white items-center justify-around py-[10px] pt-[10px] w-[1000px]'>
                        <img class='bg-white rounded-full w-[70px] h-[70px] text-left mr-[10px] ml-[30px] object-cover' src={e.img}></img>

                        <div class='w-[200px] bg-white'>
                        <h5 class='mr-[100px] text-[15px] w-[200px] font-bold'>{e.name}</h5>
                        <h5 class='text-[12px] font-bold'>{e.last_name}</h5>
                        </div>
                        
                        <div class='w-[200px] bg-white '>
                        <h5 class='mr-[100px] text-[15px] w-[200px] text-black font-bold'>{e.email}</h5>
                        </div>

                        <div class='w-[200px] bg-white'>
                        <h5 class='mr-[100px] text-[15px] w-[200px] font-bold'>{e.username}</h5>
                        </div>

                        <button className="item-center justify-between flex" onClick={() => DeleteUser(e.id) }>
                        <img  class= " z-10  my-auto h-9 mt-8 text-center item-center justify-center"src = {Delete}/>
                        </button>
                

                    </div> 


            )
            })} 

            </div>

        </div>
    )


}