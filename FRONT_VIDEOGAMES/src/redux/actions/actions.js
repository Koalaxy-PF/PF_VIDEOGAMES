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
export const GET_USERS = "GET_USERS"

export const UPDATE_GAME = 'UPDATE_GAME';
export const GET_DETAIL = 'GET_DETAIL'
export const CLEAN_USERS = "CLEAN_USERS"


// RUTAS PARA LA AUTENTICACIÓN

export const REGISTER_SUCESS = "REGISTER_SUCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";
export const LOGIN_SUCESS = "LOGIN_SUCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";
export const LOGOUT = "LOGOUT";
export const SET_MESSAGE = "SET_MESSAGE";

// RUTAS PARA EL CARRITO

export const GET_ALL_CART = 'GET_ALL_CART'
export const DELETE_PRODUCT_CART = 'DELETE_PRODUCT_CART'
export const GET_ALL_CART_LOCAL_STORAGE = 'GET_ALL_CART_LOCAL_STORAGE'
export const DELETE_PRODUCT_CART_LOCAL_STORAGE = 'DELETE_PRODUCT_CART_LOCAL_STORAGE'

// RUTAS PARA LAS ORDENES DE PAGO

export const GET_ORDER_ID = 'GET_ORDER_ID'

// RUTA PARA OBTENER LA LIBRERÍA

export const GET_PRODUCTS_LIBRARY = 'GET_PRODUCTS_LIBRARY'

// RUTAS PARA EL PANEL DE ADMINISTRADOR

export const PUT_PRODUCT_DASH = "PUT_PRODUCT_DASH"

// RUTAS PARA LAS REVIEWS

export const GET_REVIEWS = "GET_REVIEWS"
export const ADD_REVIEW = "ADD_REVIEW"


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
    let Json = await axios.get(`https://apikoalaxy-production.up.railway.app/products`);
    dispatch({
      type: GET_GAMES,
      payload: Json.data,
    });
  }
}

//action que busca un juego en específico (searchbar)

export function GetGame(name) {
  return async function (dispatch) {
    let json = await axios.get("https://apikoalaxy-production.up.railway.app/products?name=" + name);
    dispatch({
      type: GET_GAMES,
      payload: json.data,
    });
  };
}

//action que trae juegos por id (sirve para el detail)
export function GetGameById(id) {
  return async function (dispatch) {
    var json = await axios.get(`https://apikoalaxy-production.up.railway.app/products/${id}`);
    return dispatch({
      type: GET_BY_ID,
      payload: json.data,
    });
  };
}

export function GetDetail(id) {
  return async function(dispatch) {
      const json = await axios(`https://apikoalaxy-production.up.railway.app/products/${id}`);
      return dispatch({
          type: GET_DETAIL,
          payload: json.data
      });
  };
};


//action que trae todos los generos
export function GetGenres() {
  return async function (dispatch) {
    let json = await axios.get(`https://apikoalaxy-production.up.railway.app/genres`);
    dispatch({
      type: GET_GENRES,
      payload: json.data,
    });
  };
}

export function GetCompanies() {
  return async function (dispatch) {
    let json = await axios.get("https://apikoalaxy-production.up.railway.app/company");
    dispatch({
      type: GET_COMPANIES,
      payload: json.data,
    });
  };
}

//action PostGame sirve para el crear un juego
export function PostGame(payload) {
  var json = axios.post(`https://apikoalaxy-production.up.railway.app/products`, payload);
  return { type: POST_GAME, payload: json };
}

export function DeleteGame(idGame){
  return async function(dispatch){
      return axios.delete(`https://apikoalaxy-production.up.railway.app/products/${idGame}`)
  }
}

export function UpdateGame(id, payload) {
  return async function(dispatch) {
      const json = await axios.put(`https://apikoalaxy-production.up.railway.app/products/update/${id}`, payload);
      return dispatch({
          type: UPDATE_GAME,
          payload: json.data
      });
  };
};

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
    var json = await axios.get(`https://apikoalaxy-production.up.railway.app/wishlist/${id}`);
    return dispatch({
      type: GET_WISH_LIST,
      payload: json.data,
    });
  };
}

export function PostWishList(productWishId) {
  return async function () {
    return axios.post(`https://apikoalaxy-production.up.railway.app/wishlist/`, productWishId);
  };
}

export function DeleteWishListProduct(payload){

  console.log(payload);
  return async function () {
    return await axios.delete(`https://apikoalaxy-production.up.railway.app/wishlist/delete/?productWishId=${payload}`);
  };
}


// ACCIONES DEL CARRITO DE COMPRAS

export function getInCart(id) {
  return async function (dispatch) {
    let json = await axios.get(`https://apikoalaxy-production.up.railway.app/cart/${id}`);
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
    return await axios.post("https://apikoalaxy-production.up.railway.app/cart/addProduct", payload);
  };
}

export function DeleteProductCart(idProduct){
  return async function(dispatch){
        return axios.delete(`https://apikoalaxy-production.up.railway.app/cart/delete/?productCardId=${idProduct}`)
      }
    }

export function PutProductDash(idProduct){
  return async function(dispatch){
      return axios.put(`https://apikoalaxy-production.up.railway.app/products/update/${idProduct}`)
  }
}

export function DeleteProductCartLocalStorage(NameProduct){
    return async function(dispatch){
        dispatch({
          type: DELETE_PRODUCT_CART_LOCAL_STORAGE,
          payload: NameProduct,
        })
      }
    }

    // ACTIONS - LOCAL STORAGE

  //action que trae todos los juegos
  export function GetUsers(){
    return async function (dispatch) {
      let Json = await axios.get(`https://apikoalaxy-production.up.railway.app/users`);
      dispatch({
        type: GET_USERS,
        payload: Json.data,
      });
    }
  }
  
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

    // REVIEWS

    export function GetReviews(productId){
      return async function(dispatch){
        let json = await axios.get(`https://apikoalaxy-production.up.railway.app/reviews/?productId=${productId}`)
        dispatch({
          type: GET_REVIEWS,
          payload: json.data
        })
      }
    }

    export function AddReview(payload){
      return async function (dispatch) {
        return await axios.post(`https://apikoalaxy-production.up.railway.app/reviews`, payload)
      }
    }

    // CERRAR SESIÓN - (LOGOUT)
    
    export function LogOut(){
      return async function(dispatch){
        dispatch({
          type: LOGOUT,
        })
      }
    }

    // MÉTODOS DE PAGO (PAYPAL - MERCADOPAGO)
    
    export function PostPaypal(id){
      return async function(){
        return axios.post(`https://apikoalaxy-production.up.railway.app/order/${id}`)
      }
    }

    export function PostMercadoPago(id){
      return async function(){
        return axios.post(`https://apikoalaxy-production.up.railway.app/payment/${id}`)
      }
    }

    ///DashBoard Users

    export function DeleteUserDashBoard(idUser){
      return async function(dispatch){
            return axios.delete(`https://apikoalaxy-production.up.railway.app/users/${idUser}`)
          }
    }

    export function PutUserAdminDashBoard(idUser){
      return async function(dispatch){
          return axios.put(`https://apikoalaxy-production.up.railway.app/users/isadmin/${idUser}`)
      }
    }

    export function PutUserBanDashBoard(idUser){
      return async function(dispatch){
          return axios.put(`https://apikoalaxy-production.up.railway.app/users/ban/${idUser}`)
      }
    }

    export function CleanUsers(){

      return{
          type: CLEAN_USERS,
          payload: []
      }
  }

    // ÓRDENES DE PAGO

    export function GetOrderByID(id){
      return async function(dispatch){
        let json = await axios.get(`https://apikoalaxy-production.up.railway.app/orderDetail/${id}`)
        dispatch({
          type: GET_ORDER_ID,
          payload: json.data,
        })
      }
    }

    // RESETEAR CONTRASEÑA DE USUARIOS REGISTRADOS

    export function ResetPassword(email){
      return async function(){
        return await axios.put('https://apikoalaxy-production.up.railway.app/auth/resetPassword', email)
      }
    }

    // TRAER LOS PRODUCTOS DE LA BIBLIOTECA

    export function GetProductsLibrary(id){
      return async function(dispatch){
        let json = await axios.get(`https://apikoalaxy-production.up.railway.app/library/${id}`);
        dispatch({
          type: GET_PRODUCTS_LIBRARY,
          payload: json.data,
        })
      }
    }
