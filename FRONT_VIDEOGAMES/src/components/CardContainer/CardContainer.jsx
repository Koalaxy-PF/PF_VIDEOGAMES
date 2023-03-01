import React from "react";
//import { useDispatch, useSelector } from "react-redux";
//import { useEffect, useState } from "react";
//import {  } from "../../redux/actions";
import Card from "../Card/Card";
//import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";

export default function Cards() {
  //const dispatch = useDispatch();
  
 
  
/*   useEffect(() => {
    
   
  }, [dispatch]); */


  return (
    <div>
        <ul>
        <SearchBar/> 
       
        
        
        </ul>
     
       <div>
    
       </div>
          
      
      {currentProduct?.map((product) => {
        return (
         
         
          <Fragment>
        
            <Link to={"/product/" + product.id}>
              <div>
              <Card
                image={product.image}
                name={product.name}
                description={product.continents}
                price={product.population}
              />
              </div>
            </Link>
          </Fragment>
        );
      })}
     
      
    </div>
  );
}