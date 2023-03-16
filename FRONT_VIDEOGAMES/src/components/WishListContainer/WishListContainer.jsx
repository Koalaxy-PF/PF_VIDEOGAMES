import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { GetWishList, PostWishList, GetGames} from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";
import WishListCard from "../WishListCard/WishListCard";

export default function Cards(){

  const WishListGames = useSelector((state) => state.WishList);
  const User = useSelector((state) => state.user)
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const dispatch = useDispatch();
  const[currentPage,setCurrentPage] =useState(1) 

  useEffect(() => {
    dispatch(GetWishList(User.user.id))
  },[]) 


  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;
  //const currentGames = WishListGames.productwishes.slice(indexFirstGame, indexLastGame)

  const pagination = pagesNumber =>{
    setCurrentPage(pagesNumber)
    window.scrollTo(0,0)
  }  

  return (        
    <div>  
      {
        WishListGames.productwishes?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <WishListCard
                img={product.img}
                name={product.name}
                calification={product.calification}
                price={product.price}
                genre={product.genre} 
              />
              </div>
            </Link>
          </Fragment>
        );
      })} 
       <div className="flex flex-nowrap justify-center w-full flex-row my-3">
        {/* <Pagination 
          allGames={WishListGames.length}
          gamesPerPage={gamesPerPage}
          pagination={pagination}
          currentPage={currentPage}
        /> */}
       </div>
    </div>
  );
}