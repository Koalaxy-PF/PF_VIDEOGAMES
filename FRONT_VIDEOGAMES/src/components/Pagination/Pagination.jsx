import React from "react";

export default function Pagination({allGames, gamesPerPage, setCurrentPage, currentPage}){
    
    const [pageNumberLimit] = useState(5)
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5)
    const [minPageNumberLImit, setMinNumberLimit] = useState(0)
    
    const pages = [];
    for (let i = 1; i < Math.ceil(allGames.length/gamesPerPage); i++) {
        pages.push(i+1);
    }

    const pageNumbers = pages.map(page => {
        if(page <= maxPageLimit && page > minPageLimit) {
            return(
                <li key={page} id={page} onClick={handlePageClick} className={currentPage === page ? 'active' : null} >
                    {page}
                </li>
            );
        } else {
            return null;
        }
    })

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))
        window.scrollTo(0,0);
    }

    const handleNextbtn = () => {
        setCurrentPage(currentPage + 1);

        if(currentPage + 1 > maxPageNumberLimit){
            setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setMinNumberLimit(minPageNumberLImit + pageNumberLimit);
        }
    };

    const handlePrevBtn = () => {
        setCurrentPage(currentPage-1);

        if((currentPage - 1) % pageNumberLimit === 0){
            setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setMinNumberLimit(minPageNumberLImit - pageNumberLimit);
        }
    }


    let pageIncrementBtn = null;
    if(pages.length > maxPageNumberLimit){
        pageIncrementBtn = <li onClick={handleNextbtn}>&hellip;</li>
    }

    let pageDecrementBtn = null;
    if(minPageLimit >= 1){
        pageDecrementBtn = <li onClick={handlePrevBtn}>&hellip;</li>
    }

    const renderPageNumbers = pages.map((number) => {
        if(number < maxPageNumberLimit + 1 && number > minPageNumberLImit){
            return(
                <li 
                key={number}
                id={number}
                onClick={(e) => handleClick(e)}
                >
                    {number}
                </li>
            )
        } else {
            return null;
        }
    })


    return(
        <div>
            <ul>
                <li>
                    <button disabled={currentPage === pages[0] ? true : false} onClick={handlePrevBtn} >
                    </button>
                </li>
                {pageDecrementBtn}
                {renderPageNumbers}
                {pageIncrementBtn}
                <li>
                    <button disabled={currentPage === pages[pages.length - 1] ? true: false} onClick={handleNextbtn} >

                    </button>
                </li>
            </ul>
        </div>
    )
}