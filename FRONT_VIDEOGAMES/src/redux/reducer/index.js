import {
    GET_GAMES,
    POST_GAME,
    GET_BY_ID,
    GET_GENRES,
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
} from "../actions/actions"

const initialState = {
    Games:[],
    GamesCopy:[],
    Genres:[],
    details:[],
    user:{}
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

        case GET_GAME:
            console.log(action.payload);
            return {
                ...state,
                Games: action.payload,
        }

        case GET_GENRES:
        return{
            ...state,
            Genres: action.payload
        }

        case POST_GAME:
        return {
        ...state,
        Games: action.payload,
        GamesCopy: action.payload,
      };

    case GET_GAME:
      console.log(action.payload);
      return {
        ...state,
        Games: action.payload,
      };

    case GET_GENRES:
      return {
        ...state,
        Genres: action.payload,
      };

    case POST_GAME:
      return {
        ...state,
      };

    //reducers de ordenamiento

    case ORDER_BY_NAME:
      let order =
        action.payload === "asc"
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
      let orderByReleased =
        action.payload === "asc"
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


    default: {
      return state;
    }
  }
}

export default rootReducer;
