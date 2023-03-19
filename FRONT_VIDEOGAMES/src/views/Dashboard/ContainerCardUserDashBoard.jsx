import React, { useEffect} from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetUsers } from "../../redux/actions/actions";
import CardUserDashBoard from "./CardUserDashBoard";


export default  function ContainerCardUserDashBoard(){

    const dispatch = useDispatch();
    const allUsers = useSelector((state) => state.users);


    useEffect(() => {
        dispatch(GetUsers());
      }, [dispatch]); 


    return(

        <div class='bg-gray-200 overflow-x-hidden flex flex-wrap justify-center'>
            {allUsers.user?.map((e) => {
            return(
                <Fragment key={e.id}>
                    <div>
                    <CardUserDashBoard
                    id={e.id}
                    img={e.img}
                    name={e.name}
                    last_name={e.last_name}
                    email={e.email}
                    username={e.username}    
                    />
                    </div> 
                </Fragment>

            )
        })} 

        </div>

    )





}