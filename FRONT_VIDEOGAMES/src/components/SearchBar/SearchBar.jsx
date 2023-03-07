import { useState } from "react";
import { GetGame } from "../../redux/actions/actions.js";
import icons from '../../assets/icons colores/icons.js'
import { useDispatch } from "react-redux";

export default function SearchBar({open, setOpen}){

    const dispatch = useDispatch();
    const [ name, setName ] = useState("");

    const handleInputChange = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(GetGame(name))
        setName('')
    };

    return(
        <form onSubmit={(e) => handleClick(e)}>
        <div className={`flex items-center mt-2 rounded-md py-2 mr-2 ${!open ? "ml-1" : "px-4 bg-gray-600"}`}>
            <img src={icons.img6} className={`flex w-8 items-center text-4xl float-left cursor-pointer ${open && "mr-2"}`}  onClick={() => setOpen(!open)} />
            <input type="search" id="search" className={`text-base bg-transparent w-full text-slate-200 focus:outline-none ${!open && "hidden"}`} onChange={(e) => handleInputChange(e)} />
        </div>
        </form>
    )

}