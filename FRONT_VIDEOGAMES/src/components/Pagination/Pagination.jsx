import React, {useState} from "react";

export default function Pagination({allGames, gamesPerPage, setCurrentPage, currentPage}){
    
    const [pageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLimit, setMinNumberLimit] = useState(0)
    
    const pages = [];
    for (let i = 1; i < Math.ceil(allGames.length/gamesPerPage); i++) {
        pages.push(i);
    }

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scrollTo(0,0);
    }

    

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage-1);

        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    }


    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageNumberLimit >= 1){
        pageDecrementBtn = <li onClick={handlePrevBtn}>&hellip;</li>
    }

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLimit){
            return(
                <li>
                    {
                        currentPage === number ? 
                        <button disabled className="rounded-md bg-cyan-500 w-10 h-10 text-center border-cyan-900 text-white border-2">{number} </button> 
                        : <button key={number}
                        id={number}
                        onClick={(e) => handleClick(e)} 
                        className="rounded-md bg-[#1cecf4] border-2 border-white w-10 h-10 text-center hover:bg-cyan-500 hover:border-cyan-900 hover:text-white">
                        {number}
                        </button>
                    }
                    
                </li>
            )
        } else {
            return null;
        }
    })


    return(
        <div>
            <ul className="flex justify-around gap-x-1">
                <li>
                    {currentPage === pages[0] ? <button className="w-10 h-10 display-hidden"></button>  : <button className="rounded-md bg-[#1cecf4] border-2 border-white w-10 h-10 text-center justify-items-center hover:bg-cyan-500 hover:border-cyan-900 hover:text-white" onClick={handlePrevBtn} ><ion-icon name="chevron-back-outline"></ion-icon>
                    </button>}
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    {currentPage === pages[pages.length - 1] ? <button className="w-10 h-10 display-hidden"></button> : <button className="rounded-md bg-[#1cecf4] border-2 border-white w-10 h-10 text-center justify-items-center hover:bg-cyan-500 hover:border-cyan-900 hover:text-white" onClick={handleNextbtn} >
                        <ion-icon name="chevron-forward-outline"></ion-icon>
                    </button>}
                    
                </li>
            </ul>
        </div>
    )
}