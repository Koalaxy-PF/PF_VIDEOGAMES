import React, { useState } from 'react'
import { useDispatch , useSelector} from "react-redux";
import { GetGames , GetGenres,GetCompanies , } from '../../../redux/actions/actions';
import { useEffect } from 'react'

import Pagination from '../../../components/Pagination/Pagination';
import GameDashBoard from './GamesDashBoard';

export default function GamesDashBoard() {

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
  
  return (
    <div className="justify-center text-centepy-[20px] rounded mx-[30px] mr-[20px]">
      <div class="">
        {currentGames?.map((el, index) => {
          return (
            <GameDashBoard
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
