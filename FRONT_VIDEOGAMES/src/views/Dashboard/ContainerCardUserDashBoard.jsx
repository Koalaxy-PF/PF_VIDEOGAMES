// import React, { useEffect} from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {GetUsers } from "../../redux/actions/actions";
// import CardUserDashBoard from "./CardUserDashBoard";


// export default  function ContainerCardUserDashBoard(){

//     const dispatch = useDispatch();

//     useEffect(() => {
//         dispatch(GetUsers());
//       }, [dispatch]); 

//     const allUsers = useSelector((state) => state.users);


//     return(

//         <div class='bg-gray-200 overflow-x-hidden flex flex-wrap justify-center'>
//             {allUsers?.map((e) => {
//             return(
//                 <div>
//                     <CardUserDashBoard
//                     id={e.id}
//                     img={e.img}
//                     name={e.name}
//                     last_name={e.last_name}
//                     email={e.email}
//                     username={e.username}    
//                     />
//                 </div> 
//             )
//         })} 

//         </div>

//     )





// }