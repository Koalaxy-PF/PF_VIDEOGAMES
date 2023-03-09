import React from "react";

export default function Pagination({props}){
    const { currentPage, maxPageLimit, minPageLimit } = props;
    const totalPages = props.response.totalPages-1;
    const data = props.response.data;
    const pages = [];
    for (let i = 1; i < totalPages; i++) {
        pages.push(i);
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

    let pageIncrementEllipses = null;
    if(pages.length > maxPageLimit){
        pageIncrementEllipses = <li onClick={handleNextClick}>&hellip;</li>
    }
    let pageDecrementEllipses = null;
    if(minPageLimit >= 1){
        pageDecrementEllipses = <li onClick={handlePrevClick} >&hellip;</li>
    }
    // const renderData = (data) =>{
    //     return(
    //         <ul>
    //             {data.map((d) => 
    //             <li key={d['_id']} ></li>)}
    //         </ul>
    //     )
    // }

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