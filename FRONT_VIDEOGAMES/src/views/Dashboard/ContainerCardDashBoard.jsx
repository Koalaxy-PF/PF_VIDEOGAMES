import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import {GetGames } from "../../redux/actions/actions";
import CardDashBoard from "./CardDashBoard";


export default function CardsDashBoard() {
const allGames = useSelector((state) => state.GamesCopy);
const [gamesPerPage, setGamesPerPage] = useState(4);
const dispatch = useDispatch();
const[currentPage,setCurrentPage] =useState(1) 



const indexLastGame = currentPage * gamesPerPage;
const indexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(indexFirstGame, indexLastGame)



useEffect(() => {
  dispatch(GetGames());
}, [dispatch]);  

  return (
    <div class='bg-gray-200 overflow-x-hidden flex flex-wrap justify-center'>
          
      {currentGames?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <CardDashBoard
                productId={product.id}
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