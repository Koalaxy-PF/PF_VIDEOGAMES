import axios from "axios";

export const GET_GAMES = "GET_GAMES"
export const GET_BY_ID = "GET_BY_ID"
export const GET_GENRES = "GET_GENRES"
export const FILTER_GENRES = "FILTER_GENRES"
export const FILTER_FER_COMPANY = "FILTER_FER_COMPANY"
export const ORDER_BY_NAME = "ORDER_BY_NAME"
export const ORDER_BY_RELEASED = "ORDER_BY_RELEASED"
export const TIDY_PRICE = "TIDY_PRICE"
export const CLEAN = "CLEAN"



//action que trae todos los juegos
export function GetGames(){

    return async function(dispatch){
        let Json = await axios.get(`http://localhost:3000/products`)
        dispatch({
            type: GET_GAMES,
            payload: Json.data
        })
    }
}

//action que trae juegos por id (sirve para el detail)
export function GetGameById(id){

    return async function(dispatch){
      var json = await axios.get(`http://localhost:3000/products/${id}`)
      return dispatch ({
        type : GET_BY_ID,
        payload: json.data
      })
    }
  
}

//action que trae todos los generos
export function GetGenres(){

    return async function(dispatch){
        let Json = await axios.get(`http://localhost:3000/genres`)
        dispatch({
            type: GET_GENRES,
            payload: Json.data
        })
    }

}

//action PostGame sirve para el crear un juego
export function PostGame(payload){

    return async function(dispatch){
        var json = axios.post(`http://localhost:3000/products`,payload)
       return json
   } 
}

//action que filtra por genero...
export function FilterGenres(payload){

    return{
        type: FILTER_GENRES,
        payload
    }

}

//action que filtra por company...
export function FilterCompany(payload){

    return{
        type: FILTER_FER_COMPANY,
        payload
    }

}

//action que odena alfabeticamente de forma ascendente y descendiente
export function TidyAlphabetically(payload){
  
    return {
        type : ORDER_BY_NAME,
        payload
    }
  
}

//action que odena por fecha de lanzamiento de forma ascendente y descendiente
export function TidyReleased(payload){
  
    return {
        type : ORDER_BY_RELEASED,
        payload
    }
  
}

//action que odena por precio de forma ascendente y descendiente
export function TidyPrice(payload){

    return{
        type: TIDY_PRICE,
        payload
    }
}

//action que limpia el estado
export function Clean(){

    return{
        type: CLEAN,
        payload: []
    }
}