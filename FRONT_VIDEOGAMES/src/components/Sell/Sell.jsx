import React, { useState } from 'react'
import Cards from '../CardContainer/CardContainer'
//import Card from '../Card/Card'
import { useDispatch , useSelector} from "react-redux";
import { GetGames , TidyAlphabetically , TidyPrice , TidyReleased, FilterGenres} from "../../redux/actions/actions";
import { useEffect } from 'react'

export default function Sell() {

  const allGames = useSelector((state) => state.Games)
  const dispatch = useDispatch();
  const[order,setOrder] =useState('') 
  const [setRender] = useState("");


  //  const allGames = useSelector((state)=> state.Games)
  useEffect(() => {
    dispatch(GetGames());
  }, [dispatch]);  
  
  // const pagination = pagesNumber => {
  //   setCurrentPage(pagesNumber)
  // };

  // const handleClick = (e) => {
  //   e.preventDefault();
  //   dispatch(CleanGames(dispatch))
  //   dispatch(GetGames())
  // }



  return (

    <div className='w-full h-100vh bg-gray-300'>
      


      {/* <h1 className='flex  ml-8 font-bold mt-0'>STORE</h1> */}

    <div class='flex'>
      <Cards />
    </div>


    </div>
  )
}
