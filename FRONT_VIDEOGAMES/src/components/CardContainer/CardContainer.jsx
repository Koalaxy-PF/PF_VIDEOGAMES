import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import SearchBar from "../SearchBar/SearchBar";
import { CleanGames, GetGames ,  TidyAlphabetically , TidyPrice , TidyReleased, FilterGenres , FilterCompany} from "../../redux/actions/actions";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filter/Filter";


export default function Cards() {
//const dispatch = useDispatch();
const pageNumberLimit = 5;
const allGames = useSelector((state) => state.GamesCopy);
const [gamesPerPage] = useState(10);
const dispatch = useDispatch();
const[currentPage,setCurrentPage] =useState(1) 

const[order,setOrder] =useState('') 
const [setRender] = useState("");

const indexLastGame = currentPage * gamesPerPage;
const indexFirstGame = indexLastGame - gamesPerPage;
const currentGames = allGames.slice(indexFirstGame, indexLastGame)

const onPageChange= (pageNumber)=>{
  setCurrentPage(pageNumber);
}

useEffect(() => {
  dispatch(GetGames());
}, [dispatch]);  

const pagination = pagesNumber => {
  setCurrentPage(pagesNumber)
};

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
    <div class='bg-gray-200  overflow-x-hidden flex flex-wrap justify-center'>

              <div class="flex item-center justify-between flex-wrap bg-gray-200 w-full">

                {/* <Filter/> */}

              <div class="block mt-4 lg:inline-block lg:mt-0 mr-4  ">
                <select  className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black' onChange={e => handleFilterTidy(e)}>
                        <option selected hidden>Alphabetic</option>
                        <option value="asc"> A to Z </option>
                        <option value="descendente">Z to A</option>
                </select>
              </div>

              <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                  <select className='px-3 bg-[#1cecf4] text-white py-3  rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black' onChange={e => handleFilterTidyPrice(e)} >
                        <option selected hidden>Price</option>
                        <option value="min"> Minor to Major Price </option>
                        <option value="Maximo">Major to Minor Price</option>
                  </select>
              </div>

              <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                        <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-center text-xl hover:bg-transparent hover:text-black' onChange={e => HandlerFilterTypeFerCompany(e)}  >
                                <option value="all"> companies </option>
                                <option value="Rockstar North">Rockstar North</option>
                                {/* <option value="CD PROJEKT RED">CD PROJEKT RED</option> */}
                                <option value="Valve Software">Valve Software</option>
                                {/* <option value="Crystal Dynamics">Crystal Dynamics</option> */}
                                <option value="Bethesda Softworks">Bethesda Softworks</option>
                                {/* <option value="Aspyr Media">Aspyr Media</option> */}
                                <option value="Rockstar Games">Rockstar Games</option>
                                {/* <option value="DONTNOD Entertainment">DONTNOD Entertainment</option> */}
                                {/* <option value="Digital Extremes">Digital Extremes</option> */}
                                {/* <option value="Double Eleven">Double Eleven</option> */}
                                <option value="Santa Monica Studio">Santa Monica Studio</option>
                                {/* <option value="Bethesda Game Studios">Bethesda Game Studios</option> */}
                                {/* <option value="Vicarious Visions">Vicarious Visions</option>
                                <option value="505 Games">505 Games</option> */}
                                {/* <option value="Guerrilla Games">Guerrilla Games</option>
                                <option value="Psyonix">Psyonix</option> */}
                                {/* <option value="Engine Software">Engine Software</option>
                                <option value="4A Games">4A Games</option> */}


                        </select>
              </div> 


              <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                        <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-center text-xl hover:bg-transparent hover:text-black' onChange={e => HandlerFilterTypeFerGenres(e)}  >
                                <option value="all"> TypesGames </option>
                                <option value="RPG"> RPG </option>
                                <option value="Adventure">Adventure</option>
                                <option value="Action">Action</option>
                                <option value="Shooter">Shooter</option>
                                <option value="Casual">Casual</option>
                                <option value="Puzzle">Puzzle</option>
                                <option value="Platformer">Platformer</option>
                                <option value="Racing">Racing</option>
                                <option value="Sports">Sports</option>
                                <option value="Family">Family</option>
                                <option value="Board Games">Board Games</option>
                                <option value="Card">Card</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Arcade">Arcade</option>
                                <option value="Fighting">Fighting</option>
                                <option value="Indie">Indie</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Massively Multiplayer">Massively Multiplayer</option>
                                <option value="Educational">Educational</option>
                        </select>
              </div>


              <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black' onChange={e => handleFilterTidyReleased(e)}>
                        <option selected hidden>Released</option>
                        <option value="asc"> recent </option>
                        <option value="descendente"> oldest</option>
                </select>
              </div>
              <button className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black'onClick={e => {handleClick(e)}}>Clear Filters</button>
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
       <div className="flex flex-nowrap justify-center w-full flex-row my-3">
        <Pagination 
          allGames={allGames}
          gamesPerPage={gamesPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
       </div>
    </div>
  );
}