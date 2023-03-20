import React, { useState } from 'react'
import Cards from '../CardContainer/CardContainer'
import Card from '../Carrucel/Card'
import SearchBar from '../SearchBar/SearchBar';
import { useDispatch , useSelector} from "react-redux";
import { GetGames , GetGenres, TidyAlphabetically , TidyPrice , TidyReleased, FilterGenres, FilterCompany, GetCompanies , CleanGames} from "../../redux/actions/actions";
import { useEffect } from 'react'

import Pagination from '../Pagination/Pagination';

export default function Sell() {

  const[order,setOrder] =useState('') 
  const dispatch = useDispatch();

  const AllGames = useSelector((state) => state.GamesCopy)
  const AllGenres = useSelector((state) => state.Genres);
  const AllCompanies = useSelector((state) => state.Companies);

const [gamesPerPage, setGamesPerPage] = useState(8);
const [currentPage,setCurrentPage] =useState(1) 
const indexLastGame = currentPage * gamesPerPage;
const indexFirstGame = indexLastGame - gamesPerPage;
const currentGames = AllGames.slice(indexFirstGame, indexLastGame)

const pagination = pagesNumber =>{
  setCurrentPage(pagesNumber)
  window.scrollTo(0,0)
}
  
  useEffect(() => {
      dispatch(GetGames());
      dispatch(GetGenres());
      dispatch(GetCompanies());
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(CleanGames(dispatch))
    dispatch(GetGames())
  }


  const handleFilterTidy = (e) => {
    e.preventDefault();
    dispatch(TidyAlphabetically(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
  }

  const handleFilterTidyPrice = (e) => {
    e.preventDefault();
    dispatch(TidyPrice(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
  }

  const handleFilterTidyReleased = (e) => {
    dispatch(TidyReleased(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
  }

  const  HandlerFilterTypeFerGenres = (e) =>{
    e.preventDefault();
    dispatch(FilterGenres(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
  }

  const HandlerFilterTypeFerCompany = (e) =>{
    e.preventDefault();
    dispatch(FilterCompany(e.target.value))
    setOrder(`ordenado ${e.target.value}`)
  }
  
  return (
    <div className="w-full h-100vh " style={{backgroundImage: `url('https://www.xtrafondos.com/descargar.php?id=4047&resolucion=3840x2400')`, backgroundSize: 'cover'}}>
      <div className="w-100vh mx-10 mt-4">
          <div className='inline-flex mb-4'> 
            <SearchBar />
          </div>
        <div class="flex item-center justify-between flex-wrap">


          <div class="block mt-4 lg:inline-block lg:mt-0 mr-4  ">
            <select
              className="px-3 bg-gray-300 text-black py-3 rounded-xl border-2 border-white text-xl text-center  "
              onChange={(e) => handleFilterTidy(e)}
            >
              <option selected hidden>
                Alphabetic
              </option>
              <option value="asc"> A to Z </option>
              <option value="descendente">Z to A</option>
            </select>
          </div>

          <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <select
              className="px-3 bg-gray-300 text-black py-3  rounded-xl border-2 border-white text-xl text-center "
              onChange={(e) => handleFilterTidyPrice(e)}
            >
              <option selected hidden>
                Price
              </option>
              <option value="min"> Minor to Major Price </option>
              <option value="Maximo">Major to Minor Price</option>
            </select>
          </div>

          <div className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <select
              className="px-3 bg-gray-300 text-black py-3 rounded-xl border-2 border-white text-center text-xl "
              onChange={HandlerFilterTypeFerGenres}
            >
              <option selected hidden value="all">
                TypesGames
              </option>
              {AllGenres?.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div className="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <select
              className="px-3 bg-gray-300 text-black py-3 rounded-xl border-2 border-white text-center text-xl "
              onChange={HandlerFilterTypeFerCompany}
            >
              <option selected hidden value="all">
                Companies
              </option>
              {AllCompanies?.map((value, index) => (
                <option key={index} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>

          <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <select
              className="px-3 bg-gray-300 text-black py-3 rounded-xl border-2 border-white text-xl text-center "
              onChange={(e) => handleFilterTidyReleased(e)}
            >
              <option selected hidden>
                Released
              </option>
              <option value="asc"> recent </option>
              <option value="descendente"> oldest</option>
            </select>
          </div>
          <button onClick={e => {handleClick(e)}} className="px-3 bg-gray-300 text-black py-3  rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-white">Clear Filters</button>
        </div>

        
      </div>

     

      <div class="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mx-10 mt-5 mb-4">
        {currentGames?.map((el, index) => {
          return (
            <Card
              key={index}
              id={el.id}
              img={el.img}
              name={el.name}
              price={el.price}
              genre={el.genre}
              calification={el.calification}
            />
          );
        })}
      </div>
      <div className="flex flex-nowrap justify-center w-full flex-row my-3">
        <Pagination 
          allGames={AllGames.length}
          gamesPerPage={gamesPerPage}
          pagination={pagination}
          currentPage={currentPage}
        />
       </div>
    </div>
  );
}
