import { GET_MORTALITIES, ERROR_GET_MORTALITIES } from './../actions/index';

export default (state=[], action) =>{
    switch(action.type){
        case GET_MORTALITIES : 
            return [
                {
                    country: action.payload.country,
                    male:action.payload.male,
                    female : action.payload.female
                }
                ,...state];

        case ERROR_GET_MORTALITIES:
            return action.errors
    }
    return state
}