import axios from "axios";
import AuthService from "../../services/Auth.service";

export const GET_GAMES = "GET_GAMES";
export const GET_BY_ID = "GET_BY_ID";
export const GET_GENRES = "GET_GENRES";
export const GET_COMPANIES = "GET_COMPANIES";
export const FILTER_GENRES = "FILTER_GENRES";
export const FILTER_PER_COMPANY = "FILTER_PER_COMPANY";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_RELEASED = "ORDER_BY_RELEASED";
export const TIDY_PRICE = "TIDY_PRICE";
export const CLEAN = "CLEAN";
export const POST_GAME = "POST_GAME";
export const CLEAN_GAMES = "CLEAN_GAMES";
export const GET_GAME = "GET_GAME";
export const GET_WISH_LIST = "GET_WISH_LIST";
export const POST_WISH_LIST = "POST_WISH_LIST";
export const POST_SUPPORT = "POST_SUPPORT";

// RUTAS PARA LA AUTENTICACIÓN

export const REGISTER_SUCESS = "REGISTER_SUCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";

// CARRITO, BASE DE DATOS

export const GET_ALL_CART = 'GET_ALL_CART'
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART'

// CARRITO, LOCAL STORAGE

export const GET_ALL_CART_LOCAL_STORAGE = 'GET_ALL_CART_LOCAL_STORAGE'
export const DELETE_PRODUCT_CART_LOCAL_STORAGE = 'DELETE_PRODUCT_CART_LOCAL_STORAGE'

export const GET_USERS = "GET_USERS"

// ACCIONES PARA LA AUTENTICACIÓN



export const Register = (data) => (dispatch) => {
  return AuthService.Register(data);
};

export const Login = (data) => (dispatch) => {
  return AuthService.Login(data);
};

export const Login_OK = (data) => {
  return async function (dispatch) {
    dispatch({
      type: "LOGIN_SUCESS",
      payload: data,
    });
  };
};

//action que trae todos los juegos
export function GetGames(){
  return async function (dispatch) {
    let Json = await axios.get(`http://localhost:3000/products`);
    dispatch({
      type: GET_GAMES,
      payload: Json.data,
    });
  }
}

//action que busca un juego en específico (searchbar)

export function GetGame(name) {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3000/products?name=" + name);
    dispatch({
      type: GET_GAMES,
      payload: json.data,
    });
  };
}

//action que trae juegos por id (sirve para el detail)
export function GetGameById(id) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3000/products/${id}`);
    return dispatch({
      type: GET_BY_ID,
      payload: json.data,
    });
  };
}


//action que trae todos los generos
export function GetGenres() {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3000/genres`);
    dispatch({
      type: GET_GENRES,
      payload: json.data,
    });
  };
}

export function GetCompanies() {
  return async function (dispatch) {
    let json = await axios.get("http://localhost:3000/company");
    dispatch({
      type: GET_COMPANIES,
      payload: json.data,
    });
  };
}

//action PostGame sirve para el crear un juego
export function PostGame(payload) {
  var json = axios.post(`http://localhost:3000/products`, payload);
  return { type: POST_GAME, payload: json };
}

//action que filtra por genero...
export function FilterGenres(payload) {
  return {
    type: FILTER_GENRES,
    payload,
  };
}

//action que filtra por company...
export function FilterCompany(payload) {
  return {
    type: FILTER_PER_COMPANY,
    payload,
  };
}

//action que odena alfabeticamente de forma ascendente y descendiente
export function TidyAlphabetically(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

//action que odena por fecha de lanzamiento de forma ascendente y descendiente
export function TidyReleased(payload) {
  return {
    type: ORDER_BY_RELEASED,
    payload,
  };
}

//action que odena por precio de forma ascendente y descendiente
export function TidyPrice(payload) {
  return {
    type: TIDY_PRICE,
    payload,
  };
}

//action que limpia el estado
export function Clean() {
  return {
    type: CLEAN,
    payload: [],
  };
}

//action que limpia el estado games
export function CleanGames() {
  return {
    type: CLEAN_GAMES,
    payload: [],
  };
}

// ACCIONES - LISTA DE FAVORITOS ✔

export function GetWishList(id) {
  return async function (dispatch) {
    var json = await axios.get(`http://localhost:3000/wishlist/${id}`);
    return dispatch({
      type: GET_WISH_LIST,
      payload: json.data,
    });
  };
}

export function PostWishList(payload) {
  return async function () {
    return axios.post(`http://localhost:3000/wishlist/`, payload);
  };
}

export function DeleteWishListProduct(productWishId) {
  return async function (dispatch) {
    return axios.delete(`http://localhost:3000/wishlist/`, productWishId);
  };
}

// ACTIONS - MÉTODOS DE PAGO

export function PostPaypal(id){
    return async function(){
        return  axios.post(`http://localhost:3000/order/${id}`);
    }
}

// ACCIONES DEL CARRITO DE COMPRAS

export function getInCart(id) {
  return async function (dispatch) {
    let json = await axios.get(`http://localhost:3000/cart/${id}`);
    dispatch({
      type: GET_ALL_CART,
      payload: json.data,
    });
  };
}

export function setAllCart(info) {
  return async function (dispatch) {
    dispatch({
      type: GET_ALL_CART_LOCAL_STORAGE,
      payload: info,
    });
  };
}

export function postInCart(payload) {
  return async function (dispatch) {
    return await axios.post("http://localhost:3000/cart/addProduct", payload);
  };
}

export function DeleteProductCart(idProduct){
    return async function(dispatch){
        return axios.delete(`http://localhost:3000/cart/delete/?productCardId=${idProduct}`)
        
    }
}

export function DeleteProductCartLocalStorage(idProduct){
    return async function(dispatch){
        dispatch({
            type: DELETE_PRODUCT_CART_LOCAL_STORAGE,
            payload: idProduct,
        })
    }
}

// ACTIONS - LOCAL STORAGE

  //action que trae todos los juegos
  // export function GetUsers(){
  //   return async function (dispatch) {
  //     let Json = await axios.get(`http://localhost:3000/users`);
  //     dispatch({
  //       type: GET_USERS,
  //       payload: Json.data,
  //     });
  //   }
  // }

export function postInCartLocalStorage(obj){

    if(window.localStorage.getItem('carrito-ls')){

        const objeto = JSON.parse(window.localStorage.getItem('carrito-ls'));

        // MODIFICAMOS EL TOTAL DE PRODUCTOS EN EL CARRITO Y SU VALOR TOTAL

        for(let i=0; i<objeto.products.length; i++){
            p.push(objeto.products[i]);
        }

        p.push(obj);
        objeto.products = p;
        window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));

        return 'El producto se agregó con éxito a su carrito';
    }
    
    else{

        const objeto = {
            total: 1,
            price: obj.price,
            products: [obj],
        }

        window.localStorage.setItem('carrito-ls', JSON.stringify(objeto));

        return 'El producto se agregó con éxito a su carrito';

    }
  }


    //ACTION SUPPORT

    export const postSupport = (data) => (dispatch) => {
      return AuthService.Support(data);
    };
    
    export const postSupport_OK = (data) => {
      return async function (dispatch) {
        dispatch({
          type: POST_SUPPORT,
          payload: data,
        });
      };
    };
