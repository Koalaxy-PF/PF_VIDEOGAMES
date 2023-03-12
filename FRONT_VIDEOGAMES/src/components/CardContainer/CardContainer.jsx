import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { CleanGames, GetGames ,  TidyAlphabetically , TidyPrice , TidyReleased, FilterGenres , FilterCompany} from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";


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

const pagination = pagesNumber =>{
  setCurrentPage(pagesNumber)
  window.scrollTo(0,0)
}

useEffect(() => {
  dispatch(GetGames());
}, [dispatch]);  


const handleClick = (e) => {
  e.preventDefault();
  dispatch(CleanGames(dispatch))
  dispatch(GetGames())
}


const handleFilterTidy = (e) => {
  e.preventDefault();
  dispatch(TidyAlphabetically(e.target.value))
  setCurrentPage(1);
  setOrder(`ordenado ${e.target.value}`)
}

const handleFilterTidyPrice = (e) => {
  e.preventDefault();
  dispatch(TidyPrice(e.target.value))
  setCurrentPage(1);
  setOrder(`ordenado ${e.target.value}`)
}

const handleFilterTidyReleased = (e) => {
  dispatch(TidyReleased(e.target.value))
  setCurrentPage(1);
  setOrder(`ordenado ${e.target.value}`)
}

const  HandlerFilterTypeFerGenres = (e) =>{
  e.preventDefault();
  dispatch(FilterGenres(e.target.value))
  setCurrentPage(1);
  setOrder(`ordenado ${e.target.value}`)
}


const  HandlerFilterTypeFerCompany = (e) =>{
  e.preventDefault();
  dispatch(FilterCompany(e.target.value))
  setCurrentPage(1);
  setOrder(`ordenado ${e.target.value}`)
}

  return (
    <div class='bg-gray-200 overflow-x-hidden flex flex-wrap justify-center'>
          
      {currentGames?.map((product) => {
        return (
          <Fragment key={product.id}>
        
            <Link to={"/products/" + product.id}>
              <div>
              <Card
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

       <div className="flex flex-nowrap justify-center w-full flex-row my-3">
        <Pagination 
          allGames={allGames.length}
          gamesPerPage={gamesPerPage}
          pagination={pagination}
          currentPage={currentPage}
        />
       </div>
    </div>
  );
}