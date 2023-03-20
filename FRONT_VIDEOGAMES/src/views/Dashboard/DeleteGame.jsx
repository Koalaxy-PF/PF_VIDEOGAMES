import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetGames, DeleteGame } from "../../redux/actions/actions";
import Swal from "sweetalert2";


const DeleteGames = () => {
    const games = useSelector((state) => state.GamesCopy);
    const dispatch = useDispatch();
    const [game, setGame] = useState(games);

    useEffect(() => {
        dispatch(GetGames())
    }, []);

    const DeleteGameId = (id) => {

        
            dispatch(DeleteGame(id)).then((resp) => {
                Swal.fire({
                    icon: 'sucess',
                    title: resp.data.message,
                    text: 'El producto se eliminó!',
            }).then(() => {
                dispatch(GetGames());
            })}).catch((resp) => {
                Swal.fire({
                    icon: 'error',
                    title: resp.data.message,
                    text: 'El producto no se eliminó!',
           })})
   }

    return(
        <div>
            <h3>List of activities</h3>
        {
           games?.map(a => (
     <div>
        <ul key={a.id}>
            <li>Name:<span>{a.name}</span></li>
            <li>Difficulty:<span>{a.price}</span></li>
            <li>Duration:<span>{a.description} hs</span></li>
            <li><button className='close' onClick={(e)=>DeleteGameId(a.id)}>Delete</button></li>

        </ul>
            </div>

           ))
        }
    </div>
    )
};

export default DeleteGames;