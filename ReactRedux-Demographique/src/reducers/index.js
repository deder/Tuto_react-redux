import { combineReducers } from 'redux';
import CountriesReducer from "./reducer-countries"
import MortalitiesReducer from "./reducer-mortalities"
const rootReducer = combineReducers({
  countries:CountriesReducer,
  mortalities:MortalitiesReducer
});

export default rootReducer;
  