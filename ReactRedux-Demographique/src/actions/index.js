import Axios from "../../node_modules/axios";

export const GET_COUNTRIES = "GET_COUNTRY";
export const GET_MORTALITY = "GET_MORTALITY";
export const ERROR_GET_MORTALITY = "ERROR_GET_MORTALITY";
export const ERROR_GET_COUNTRIES = "ERROR_GET_COUNTRIES";
const DEFAULT_PARAM = "25/today"
const API_END_POINT = "http://api.population.io:80/1.0/";

export const getCountries = () => {
    return (dispatch) =>{
        Axios(`${API_END_POINT}countries`).then((response)=>{
            dispatch ({
                type:GET_COUNTRIES,
                payload:response.data.countries
            });
        }).catch((error)=>{
            dispatch ({
                type:ERROR_GET_COUNTRIES,
                error:error.response.data.detail
            });
        })
   }
}

const getMortalityMale = (country) =>{
    return Axios(`${API_END_POINT}mortality-distribution/${country}/male/${DEFAULT_PARAM}`);
}
const getMortalityFemale = (country) =>{
    return Axios(`${API_END_POINT}mortality-distribution/${country}/female/${DEFAULT_PARAM}`);
}

export const getMortality = (country) => {
    return (dispatch) =>{
        Axios.all([getMortalityMale(country), getMortalityFemale(country)]).then(([responseMale, responseFemale]) => {
            dispatch ({
                type:GET_MORTALITY,
                payload:{
                    country,
                    male: responseMale.data.mortality_distribution,
                    female: responseFemale.data.mortality_distribution
                }
            });
        },(error)=>{
            dispatch ({
                type:ERROR_GET_MORTALITY,
                error:error.response.data.detail
            });
        })
   }
}