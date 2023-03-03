import React from "react";

export default function Pagination({gamesPerPage, allGames, pagination}){
    const pagesNumber = [];
    for(let i = 1; i <= Math.ceil(allGames/gamesPerPage); i++){
        pagesNumber.push(i)
    };

    return(
        <nav>
            <ul>
                {
                    pagesNumber?.map(n => (
                        <li key={n} >
                            <a onClick={() => pagination(n)} > {n} </a>
                        </li>
                    ))
                }
            </ul>
        </nav>
    )
}