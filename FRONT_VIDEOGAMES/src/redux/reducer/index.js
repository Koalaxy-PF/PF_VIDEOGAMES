import {
    GET_GAMES,
    POST_GAME,
    GET_BY_ID,
    GET_GENRES,
    GET_COMPANIES,
    FILTER_GENRES,
    FILTER_PER_COMPANY,
    ORDER_BY_NAME ,
    ORDER_BY_RELEASED,
    TIDY_PRICE ,
    CLEAN,
    CLEAN_GAMES,
    GET_GAME,
    LOGIN_SUCESS,
    LOGIN_FAIL,
    POST_WISH_LIST,
    GET_WISH_LIST,
    GET_ALL_CART,
    GET_ALL_CART_LOCAL_STORAGE,
    DELETE_PRODUCT_CART_LOCAL_STORAGE
} from "../actions/actions"

const initialState = {
    Games:[],
    AllCart:[],
    GamesCopy:[],
    Genres:[],
    Companies:[],
    details:[],
    user:{},
    WishList:[]
}

function rootReducer(state = initialState, action){
    
    switch(action.type){

        // - - - AUTENTICACIÓN - - -

        case LOGIN_SUCESS:

          if(window.localStorage.getItem('info-token')){
            return{
              ...state,
              user: action.payload,
            }
          }

          else{
            window.localStorage.setItem(('info-token'), JSON.stringify(action.payload));
             return{
                  ...state,
                  user: action.payload
            }
          }
              
        
        case GET_ALL_CART:

          return{
            ...state,
            AllCart: action.payload
          }

          case GET_ALL_CART_LOCAL_STORAGE:

            if(action.payload === null){
              return{
                ...state,
                AllCart: {
                  total: 0,
                }
              }
            }
            return{
              ...state,
              AllCart: action.payload
            }

            case  DELETE_PRODUCT_CART_LOCAL_STORAGE:

              const carrito = JSON.parse(window.localStorage.getItem('carrito-ls'));

              for(let i=0; i<carrito.productcarts.length; i++){
                if(action.payload === carrito.productcarts[i].id){
                  carrito.productcarts.splice(i, 1);
                  i--;
                }
              }

              if(carrito.productcarts.length === 0){
                window.localStorage.removeItem('carrito-ls')
              }

              else window.localStorage.setItem('carrito-ls', JSON.stringify(carrito));

              return{
                ...state,
              }

        case LOGIN_FAIL:
            return{
                ...state,

            }

        case GET_GAMES:
            return{
                ...state,
                Games: action.payload,
                GamesCopy: action.payload,
        }

        // case GET_GAME:
        //     return {
        //         ...state,
        //         Games: action.payload,
        // }

        case POST_GAME:
          return {
          ...state,
          Games: action.payload,
          GamesCopy: action.payload,
        };

    // case GET_GAME:
    //   console.log(action.payload);
    //   return {
    //     ...state,
    //     Games: action.payload,
    //   };

    case GET_GENRES:
      return {
        ...state,
        Genres: action.payload,
      };

      case GET_COMPANIES:
        return {
          ...state,
          Companies: action.payload,
        }

    case POST_GAME:
      return {
        ...state,
      };

    //reducers de ordenamiento

    case ORDER_BY_NAME:
      console.log("1")
      let order = action.payload === "asc"
          ? state.Games.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.Games.sort(function (a, b) {
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (b.name.toLowerCase() > a.name.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        GamesCopy: order,
      };

    case ORDER_BY_RELEASED:
      let orderByReleased = action.payload === "asc"
          ? state.Games.sort(function (a, b) {
              if (a.released.toLowerCase() > b.released.toLowerCase()) {
                return 1;
              }
              if (b.released.toLowerCase() > a.released.toLowerCase()) {
                return -1;
              }
              return 0;
            })
          : state.Games.sort(function (a, b) {
              if (a.released.toLowerCase() > b.released.toLowerCase()) {
                return -1;
              }
              if (b.released.toLowerCase() > a.released.toLowerCase()) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        GamesCopy: orderByReleased,
      };

    case TIDY_PRICE:
      let TidyPrice =
        action.payload === "min"
          ? state.Games.sort(function (a, b) {
              if (a.price > b.price) {
                return 1;
              }
              if (b.price > a.price) {
                return -1;
              }
              return 0;
            })
          : state.Games.sort(function (a, b) {
              if (a.price > b.price) {
                return -1;
              }
              if (b.price > a.price) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        GamesCopy: TidyPrice,
      };

    //reduces de filtrados

    case FILTER_PER_COMPANY:
      const AllCom = state.GamesCopy;
      const TypeCompanyFilter =
        action.payload === "all"
          ? AllCom
          : AllCom?.filter((t) => t.company.includes(action.payload));
      return {
        ...state,
        GamesCopy: TypeCompanyFilter,
      };

    case FILTER_GENRES:
      const AllGen = state.GamesCopy;
      const TypeGamesFilter =
        action.payload === "all"
          ? AllGen
          : AllGen?.filter((t) => t.genre.includes(action.payload));
      return {
        ...state,
        GamesCopy: TypeGamesFilter,
      };

    case GET_BY_ID:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAN:
      return {
        ...state,
        details: action.payload,
      };

    case CLEAN_GAMES:
      return {
        ...state,
        GamesCopy: action.payload,
      };


    // Reducers WishList

    case POST_WISH_LIST:
      return {
      ...state,
    };

    case GET_WISH_LIST:
      return{
          ...state,
          WishList: action.payload,
    };

    default: {
      return state;
    }
  }
}

export default rootReducer;
