import getPopularMovies from './datas/getPopularMovies.data';
import getUrlMovie from './datas/getUrlMovie.data';
import getRecommendationsMovie from './datas/getRecommendationsMovie.data';
import getSearchMovie from './datas/getSearchMovie.data'

const VideoService = {
    getPopularMovies : ()=>{
        return new Promise((resolve)=>{
            const getPopularMoviesCopie = JSON.parse(JSON.stringify(getPopularMovies))
            resolve(getPopularMoviesCopie);
        });
    },
    getUrlVideoMovie : (id)=>{
            return new Promise((resolve)=>{
                let getUrlMovieCopie;
                if(id==1234){
                    getUrlMovieCopie = JSON.parse(JSON.stringify(getUrlMovie))["0000"]
                }else{
                    getUrlMovieCopie = JSON.parse(JSON.stringify(getUrlMovie)).default
                }
                resolve(getUrlMovieCopie);
            });
    },
    getSearchMovie : (searchTxt)=>{
        return new Promise((resolve)=>{
            let getSearchMovieCopie;
            if(searchTxt && getSearchMovie[searchTxt]){
                getSearchMovieCopie = JSON.parse(JSON.stringify(getSearchMovie[searchTxt]))
            }else{
                getSearchMovieCopie = JSON.parse(JSON.stringify(getSearchMovie["pokemon"]))
            }
            resolve(getSearchMovieCopie);
        });
    },
    getRecommendationsMovie : (id)=>{
        return new Promise((resolve)=>{
            const getRecommendationsMovieCopie = JSON.parse(JSON.stringify(getRecommendationsMovie))
            resolve(getRecommendationsMovieCopie);
        });
    } 
}

export default VideoService;