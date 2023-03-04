import React, { useState } from 'react'
import Cards from '../CardContainer/CardContainer'
//import Card from '../Card/Card'
import { useDispatch , useSelector} from "react-redux";
import { CleanGames, GetGames , TidyAlphabetically , TidyPrice , TidyReleased} from "../../redux/actions/actions";
import { useEffect } from 'react'
import Pagination from '../Pagination/Pagination'

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

  const handleClick = (e) => {
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



  return (

    <div className='w-full h-100vh bg-gray-300'>

      <div class="flex item-center justify-between flex-wrap ">
        <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
          <select onChange={e => handleFilterTidy(e)}>
                  <option selected hidden>Alphabetic</option>
                  <option value="asc"> A to Z </option>
                  <option value="descendente">Z to A</option>
          </select>
        </div>

        <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
            <select onChange={e => handleFilterTidyPrice(e)} >
                  <option selected hidden>Price</option>
                  <option value="min">Minor to Major</option>
                  <option value="Maximo">Major to Minor</option>
            </select>
        </div>

        
        <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                  <select onChange={e => HandlerFilterTypeFerGenres(e)}  >
                          <option value="all"> TypesGames </option>
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
          <select onChange={e => handleFilterTidyReleased(e)}>
                  <option selected hidden>Released</option>
                  <option value="asc"> oldest to newest </option>
                  <option value="descendente">newest to oldest</option>
          </select>
        </div>
      </div>

      {/* <h1 className='flex  ml-8 font-bold mt-0'>STORE</h1> */}

    <div class='flex'>
      <Cards />
    </div>


    </div>
  )
}
