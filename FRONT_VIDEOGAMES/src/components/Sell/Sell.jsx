import React, { useState } from 'react'
import Cards from '../CardContainer/CardContainer'
//import Card from '../Card/Card'
import { useDispatch, useSelector} from "react-redux";
import { GetGames } from "../../redux/actions/actions";
import { useEffect } from 'react'

export default function Sell() {

  const allGames = useSelector((state) => state.Games)
  const [order, setOrder] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [gamesPerPage, setGamesPerPage] = useState(9);

  const indexLastGame = currentPage * gamesPerPage;
  const indexFirstGame = indexLastGame - gamesPerPage;
  const currentGames = allGames.slice(indexFirstGame, indexLastGame)

  const pagination = pagesNumber => {
    setCurrentPage(pagesNumber)
  };

  const handleClick = (e) => {
    dispatch()
  }

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetGames());
   
  }, [dispatch]);  
  return (
    <div className='w-full h-100vh bg-gray-300'>
      <h1 className='flex  ml-8 font-bold mt-0'>STORE</h1>
      <Cards/>
    </div>
  )
}
