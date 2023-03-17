import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { GetWishList, PostWishList, GetGames, DeleteWishListProduct} from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";
import WishListCard from "../WishListCard/WishListCard";
import Swal from "sweetalert2";

export default function Cards(){

  const WishListGames = useSelector((state) => state.WishList);
  const User = useSelector((state) => state.user)
  const [gamesPerPage, setGamesPerPage] = useState(8);
  const dispatch = useDispatch();
  const[currentPage,setCurrentPage] =useState(1) 

  console.log(WishListGames, 'wl');

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

  const DeleteFromWL = (e) => {
    console.log(e);
    dispatch(DeleteWishListProduct(e, User.user.id)).then((response) =>{
        Swal.fire({
            icon: 'Success',
            title: response.data.message,
            text: 'El producto se eliminó!',
    })
    .then(() => {
        dispatch(GetWishList(User.user.id))
    })
    }).catch((response) => {
        Swal.fire({
            icon: 'error',
            title: response.message,
            text: 'El producto no se eliminó!',
   })})
}

  return (        
    <div className="grid bg-gray-100 content-start w-full pt-2">  
      {
        WishListGames.productwishes?.map((product) => {
        return (
          <Fragment key={product.id}>
              <div className="mx-4 my-1">
              <WishListCard
                id={product.id}
                img={product.img}
                name={product.name}
                calification={product.calification}
                price={product.priceProduct}
                genre={product.genre} 
              />
              </div>
              <div>
                <button onClick={() => DeleteFromWL(product.id)} >Delete</button>
              </div>
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