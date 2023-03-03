import React from 'react'
import Cards from '../CardContainer/CardContainer'
//import Card from '../Card/Card'
import { useDispatch} from "react-redux";
import { GetGames } from "../../redux/actions/actions";
import { useEffect } from 'react'

export default function Sell() {
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
