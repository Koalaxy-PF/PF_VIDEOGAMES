import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { GetWishList, PostWishList, GetGames} from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";
import WishListCard from "../WishListCard/WishListCard";


export default function Cards() {
//const dispatch = useDispatch();
const allGames = useSelector((state) => state.GamesCopy);
const [gamesPerPage, setGamesPerPage] = useState(8);
const dispatch = useDispatch();
const[currentPage,setCurrentPage] =useState(1) 

const[order,setOrder] =useState('') 
const [setRender] = useState("");

const indexLastGame = currentPage * gamesPerPage;
const indexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(indexFirstGame, indexLastGame)

function addWishList(e){
  PostWishList(id)
}

console.log(allGames);

const pagination = pagesNumber =>{
  setCurrentPage(pagesNumber)
  window.scrollTo(0,0)
}

useEffect(() => {
  dispatch(GetGames());
}, [dispatch]);  



console.log(currentGames);

  return (        
    <div>  
      {currentGames?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <WishListCard
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
       <div className="flex flex-nowrap justify-center w-full flex-row my-3">
        <Pagination 
          allGames={allGames}
          gamesPerPage={gamesPerPage}
          pagination={pagination}
          currentPage={currentPage}
        />
       </div>
    </div>
  );
}