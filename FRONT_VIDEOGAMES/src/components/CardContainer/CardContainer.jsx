import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";


export default function Cards() {
//const dispatch = useDispatch();
const allGames = useSelector((state) => state.Games);
  
 
/*   
   useEffect(() => {
    dispatch(GetGames());
   
  }, [dispatch]);  */


  return (
    <div class='bg-gray-200  overflow-x-hidden flex flex-wrap justify-center'>
       
    
          
      {allGames?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <Card
                img={product.img}
                name={product.name}
                calification={product.calification}
                price={product.price}
                stock={product.stock}
              />
              </div>
            </Link>
          </Fragment>
        );
      })} 

    
     
      
    </div>
  );
}