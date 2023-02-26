import React from "react";

import Search from "../../assets/icons/iconSearch.png"


export default function SearchBar(){


    return(
        <div class= "relative w-max mx-auto">
            <input type = "text" class = "relative bg-gray-300  rounded-3xl p-1  w-80 h-11" />
            <button>
               <img  class= "absolute z-10 inset-y-0 my-auto h-6 px-3.5"src = {Search}/>
            </button>
        </div>
    )

    // cree un SearchBar con un input tipo texto y un botton que tiene el icono de busqueda em png encontrado en la carpeta assets
}