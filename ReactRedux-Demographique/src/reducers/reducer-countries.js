import { GET_COUNTRIES, ERROR_GET_COUNTRIES, GET_MORTALITY, ERROR_GET_MORTALITY } from './../actions/index';
export default (state=null, action) =>{
    switch(action.type){
        case GET_COUNTRIES : 
            return action.payload;
        case ERROR_GET_COUNTRIES:
            return action.errors
    }
    return state
}