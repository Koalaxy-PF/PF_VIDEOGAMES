const initialState = {
    Games:[],
    GamesCopy:[],
    Genres:[],
    details:[]
}

function rootReducer(state = initialState, action){

    switch(action.type){
        case "GET_GAMES":
        return{
            ...state,
            Games: action.payload,
            GamesCopy: action.payload,
        }


        case "GET_GENRES":
        return{
            ...state,
            Genres: action.payload
        }

        //reducers de ordenamiento


        case 'ORDER_BY_NAME' :
           let order = action.payload === 'asc' ? 
              state.Games.sort(function(a,b) {

                if(a.name.toLowerCase() > b.name.toLowerCase()) {

                    return 1
                }
                if( b.name.toLowerCase() > a.name.toLowerCase()){
                    return -1
                 }
                return 0
              }) : 
              state.Games.sort(function(a,b) {

                  if(a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                  }
                  if( b.name.toLowerCase() > a.name.toLowerCase()){
                    return 1
                  }
                return 0
              })
        return{
            ...state,
            Games: order
        }

        case 'ORDER_BY_RELEASED' :
            let orderByReleased = action.payload === 'asc' ? 
               state.Games.sort(function(a,b) {
 
                 if(a.released.toLowerCase() > b.released.toLowerCase()) {
 
                     return 1
                 }
                 if( b.released.toLowerCase() > a.released.toLowerCase()){
                     return -1
                  }
                 return 0
               }) : 
               state.Games.sort(function(a,b) {
 
                   if(a.released.toLowerCase() > b.released.toLowerCase()) {
                     return -1
                   }
                   if( b.released.toLowerCase() > a.released.toLowerCase()){
                     return 1
                   }
                 return 0
               })
         return{
             ...state,
             Games: orderByReleased
         }
        
        case 'TIDY_PRICE':
             
            let TidyPrice = action.payload === 'min' ?
    
            state.Games.sort(function(a,b) {
                      
                if(a.price > b.price) {
                  
                    return 1
                }
                if( b.price > a.price){
                    return -1
                }
                return 0
            }) : 
            state.Games.sort(function(a,b) {
                if(a.price > b.price) {
                    return -1
                }
                if( b.price > a.price){
                    return 1
                }
                return 0
             })
        return{
            ...state,
            Games: TidyPrice
        }

        //reduces de filtrados

        case "FILTER_FER_COMPANY":
                action.payload === 'All' ? state.Games = state.GamesCopy.filter(info => info.company.length) :
                state.Games = state.GamesCopy.filter(name => name.company.find((element) => element.name?.toLowerCase() === action.payload))
        return {
            ...state,
            Games: state.Games
        }

        case "FILTER_FER_GENRES":
                action.payload === 'All' ? state.Games = state.GamesCopy.filter(info => info.genre.length) :
                state.Games = state.GamesCopy.filter(name => name.genre.find((element) => element.name?.toLowerCase() === action.payload))
        return {
            ...state,
            Games: state.Games
        }
        

        case "GET_BY_ID":
        return{
            ...state,
            details: action.payload
        }

        case "CLEAN":
            return{
                ...state,
                details: action.payload
        }


        default:{
            return state
        }

    }



}

export default rootReducer