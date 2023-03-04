import React from "react";

export default function Pagination({gamesPerPage, allGames, pagination}){
    const pagesNumber = [];
    for(let i = 1; i <= Math.ceil(allGames/gamesPerPage); i++){
        pagesNumber.push(i)
    };

    return(
        <nav className="flex flex-row text-center">
            <ul className="flex content-center align-center gap-1.5 ">
                {
                    pagesNumber?.map(n => (
                        <li key={n} className='justify-center flex-nowrap list-none rounded-xl border-2 border-solid border-sky-900 w-7 h-7 bg-sky-400 text-sky-900 text-center active:border-sky-400 active:bg-sky-900 active:text-sky-400 focus:border-sky-400 focus:bg-sky-900 focus:text-sky-400'>
                            <button onClick={() => pagination(n)} > {n} </button>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}