import React, { useEffect , useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {GetGames, FilterCompany, FilterGenres, GetGenres, TidyPrice, TidyReleased , TidyAlphabetically } from "../../redux/actions/actions";

export default function Filter() {
    
    const dispatch = useDispatch();
    const[order,setOrder] =useState('') 
    const [setRender] = useState("");
    const allGenres = useSelector((state) => state.Genres);
    
    useEffect(() => {
        dispatch(GetGames());
        dispatch(GetGenres())
    }, [dispatch]);

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
    
      const  HandlerFilterTypeFerCompany = (e) =>{
        e.preventDefault();
        dispatch(FilterCompany(e.target.value))
        setOrder(`ordenado ${e.target.value}`)
      }

    return(
        <div>
                <div class="flex item-center justify-between flex-wrap bg-gray-200">

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
                        <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-center text-xl hover:bg-transparent hover:text-black' onChange={e => HandlerFilterTypeFerGenres(e)}  >
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
                        <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-center text-xl hover:bg-transparent hover:text-black' onChange={e => HandlerFilterTypeFerCompany(e)}  >
                                <option value="all"> companies </option>
                                <option value="Rockstar North">Rockstar North</option>
                                <option value="CD PROJEKT RED">CD PROJEKT RED</option>
                                <option value="Valve Software">Valve Software</option>
                                <option value="Crystal Dynamics">Crystal Dynamics</option>
                                <option value="Bethesda Softworks">Bethesda Softworks</option>
                                <option value="Aspyr Media">Aspyr Media</option>
                                <option value="Rockstar Games">Rockstar Games</option>
                                <option value="DONTNOD Entertainment">DONTNOD Entertainment</option>
                                <option value="Digital Extremes">Digital Extremes</option>
                                <option value="Double Eleven">Double Eleven</option>
                                <option value="Santa Monica Studio">Santa Monica Studio</option>
                                <option value="Bethesda Game Studios">Bethesda Game Studios</option>
                                <option value="Vicarious Visions">Vicarious Visions</option>
                                <option value="505 Games">505 Games</option>
                                <option value="Guerrilla Games">Guerrilla Games</option>
                                <option value="Psyonix">Psyonix</option>
                                <option value="Engine Software">Engine Software</option>
                                <option value="4A Games">4A Games</option>

                                <option value="Team Bondi"> Team Bondi </option>
                                <option value="Konami Digital Entertainment">Konami Digital Entertainment</option>
                                <option value="Feral Interactive">Feral Interactive</option>
                                <option value="Warner Bros. Interactive">Warner Bros. Interactive</option>
                                <option value="Telltale Games">Telltale Games</option>
                                <option value="NetherRealm Studios">NetherRealm Studios</option>
                                <option value="Team Cherry">Team Cherry</option>
                                <option value="Respawn Entertainment">Respawn Entertainment</option>
                                <option value="Electronic Arts DICE">Electronic Arts DICE</option>
                                <option value="BANDAI NAMCO Entertainment America">BANDAI NAMCO Entertainment America</option>
                                <option value="Devolver Digital">Devolver Digital</option>
                                <option value="Red Barrels">Red Barrels</option>
                                <option value="Eidos Montreal">Eidos Montreal</option>
                                <option value="Yager">Yager</option>
                                <option value="Insomniac Games">Insomniac Games</option>
                                <option value="Ubisoft">Ubisoft</option>
                                <option value="Frictional Games">Frictional Games</option>
                                <option value="Remedy Entertainment">Remedy Entertainment</option>
                                <option value="Volition">Volition</option>
                                <option value="2K">2K</option>
                                <option value="Quantic Dream">Quantic Dream</option>
                                <option value="Naughty Dog">Naughty Dog</option>
                                <option value="Grinding Gear Games">Grinding Gear Games</option>
                                <option value="ConcernedApe">ConcernedApe</option>
                                <option value="Arkane Studios">Arkane Studios</option>
                                <option value="NVIDIA Lightspeed Studios">NVIDIA Lightspeed Studios</option>
                                <option value="Facepunch Studios">Facepunch Studios</option>
                                <option value="Bluehole">Bluehole</option>
                                <option value="BANDAI NAMCO Entertainment America">BANDAI NAMCO Entertainment America</option>
                                <option value="Electronic Arts">Electronic Arts</option>
                                <option value="Obsidian Entertainment">Obsidian Entertainment</option>
                                <option value="IO Interactive">IO Interactive</option>
                                <option value="Ninja Theory">Ninja Theory</option>
                                <option value="BioWare">IBioWare</option>
                                <option value="Kojima Productions">Kojima Productions</option>
                                <option value="Klei Entertainment">Klei Entertainment</option>
                                <option value="Sony Interactive Entertainment">Sony Interactive Entertainment</option>
                                <option value="Square Enix">Square Enix</option>
                                <option value="Deep Silver">Deep Silver</option> 

                        </select>
                </div> 


                <div class="block mt-4 lg:inline-block lg:mt-0 mr-4">
                <select className='px-3 bg-[#1cecf4] text-white py-3 rounded-xl border-2 border-white text-xl text-center hover:bg-transparent hover:text-black' onChange={e => handleFilterTidyReleased(e)}>
                        <option selected hidden>Released</option>
                        <option value="asc"> recent </option>
                        <option value="descendente"> oldest</option>
                </select>
                </div>
                {/* <button onClick={e => {handleClick(e)}}>Clear Filters</button> */}
                </div> 

        </div>
    )

}

