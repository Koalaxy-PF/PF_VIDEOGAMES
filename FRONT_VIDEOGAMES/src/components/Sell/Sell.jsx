import React from 'react'
import Cards from '../CardContainer/CardContainer'
//import Card from '../Card/Card'
import { useDispatch , useSelector} from "react-redux";
import { GetGames , TidyAlphabetically , TidyPrice , TidyReleased, FilterGenres} from "../../redux/actions/actions";
import { useEffect , useState } from 'react'

export default function Sell() {
  const dispatch = useDispatch();
  const[order,setOrder] =useState('') 

  const[currentPage,setCurrentPage] =useState(1) 
   const [setRender] = useState("");

  //  const allGames = useSelector((state)=> state.Games)
  useEffect(() => {
    dispatch(GetGames());
    setOrder(`ordenado`)
  }, [dispatch, ]);  

  
  function handleFilterTidy(e) {
    dispatch(TidyAlphabetically(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
  }

  function handleFilterTidyPrice(e) {
    dispatch(TidyPrice(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
  }

  function handleFilterTidyReleased(e) {
    dispatch(TidyReleased(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
  }

  function HandlerFilterTypeFerGenres(e){
    e.preventDefault();
    dispatch(FilterGenres(e.target.value))
    setCurrentPage(1);
    setOrder(`ordenado ${e.target.value}`)
}



  return (

    <div className='w-full h-100vh bg-gray-300'>

      <div>
        <select onChange={e => handleFilterTidy(e)}>
                <option selected hidden>Alphabetic</option>
                <option value="asc"> A to Z </option>
                <option value="descendente">Z to A</option>
        </select>
      </div>

      <div>
          <select onChange={e => handleFilterTidyPrice(e)} >
                <option selected hidden>Price</option>
                <option value="min"> Minor to Major Price </option>
                <option value="Maximo">Major to Minor Price</option>
          </select>
      </div>

      
      <div>
        <select onChange={e => handleFilterTidyReleased(e)}>
                <option selected hidden>Released</option>
                <option value="asc"> oldest to newest </option>
                <option value="descendente">newest to oldest</option>
        </select>
      </div>

      <h1 className='flex  ml-8 font-bold mt-0'>STORE</h1>

      <Cards/>


    </div>
  )
}
