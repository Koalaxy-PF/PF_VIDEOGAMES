import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { CleanGames, GetGames } from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";


export default function Cards() {
//const dispatch = useDispatch();
const allGames = useSelector((state) => state.Games);
const [gamesPerPage, setGamesPerPage] = useState(10);

const dispatch = useDispatch();
const[currentPage,setCurrentPage] =useState(1) 

const indexLastGame = currentPage * gamesPerPage;
const indexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(indexFirstGame, indexLastGame)

useEffect(() => {
  dispatch(GetGames());
}, [dispatch]);  

const pagination = pagesNumber => {
  setCurrentPage(pagesNumber)
};

const handleClick = (e) => {
  dispatch(CleanGames(dispatch))
  dispatch(GetGames())
}



  return (
    <div class='bg-gray-200  overflow-x-hidden flex flex-wrap justify-center'>
       <div className="flex flex-nowrap justify-center w-full flex-row">
        <Pagination 
          gamesPerPage={gamesPerPage}
          allGames={allGames.length}
          pagination={pagination}
        />
       </div>
    
          
      {currentGames?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <Card
                img={product.img}
                name={product.name}
                calification={product.calification}
                price={product.price}
                /* stock={product.stock} */
                genre={product.genre} 
              />
              </div>
            </Link>
          </Fragment>
        );
      })} 
    </div>
  );
}