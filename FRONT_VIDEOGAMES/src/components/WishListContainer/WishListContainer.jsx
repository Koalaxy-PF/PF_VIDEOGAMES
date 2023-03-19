import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GetWishList, PostWishList, GetGames, DeleteWishListProduct} from "../../redux/actions/actions";
import WishListCard from "../WishListCard/WishListCard";
import Swal from "sweetalert2";
import Error from '../../assets/Error/Wishlist/EmptyW.png'

export default function Cards(){

  const WishListGames = useSelector((state) => state.WishList);
  const User = useSelector((state) => state.user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetWishList(User.user.id))
  },[])   

  const DeleteFromWL = (id) => {

    dispatch(DeleteWishListProduct(id)).then((response) =>{
        Swal.fire({
            icon: 'Success',
            title: response.data.message,
            text: 'El producto se eliminó!',
    }).then(() => {
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
        WishListGames.length === 0 ?

        <div>
          <img src={Error} className="w-1/3 mx-auto" alt="" />
        </div>

        :

        WishListGames.productwishes.length === 0 ?

          <div>
            <img src={Error} className="w-1/3 mx-auto" alt="" />
          </div>

          :

        WishListGames.productwishes?.map((product, index) => {
        return (
          <div key={product.id}>
              <div className="mx-4 my-1">
              <WishListCard
                id={product.id}
                key={index}
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
          </div>
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