import axios from 'axios'
import IhmConfig from '../configs/ihm.config';

class VideoService {
    urlsService = {
        popularMovies: `${IhmConfig.API_END_POINT}discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=${IhmConfig.API_KEY}`,
        urlVideoMovie: `${IhmConfig.API_END_POINT}movie/[id]?language=fr&append_to_response=videos&include_adult=false&api_key=${IhmConfig.API_KEY}`,
        urlRecommendationsVideoMovie: `${IhmConfig.API_END_POINT}movie/[id]/recommendations?language=fr&append_to_response=videos&include_adult=false&api_key=${IhmConfig.API_KEY}`,
        urlSearchMovie: `${IhmConfig.API_END_POINT}search/movie?query=[searchTxt]&language=fr&include_adult=false&api_key=${IhmConfig.API_KEY}`
    }
    getPopularMovies = () => {
        return axios.get(this.urlsService.popularMovies)
    }
    getUrlVideoMovie = (id) => {
        console.log(this.urlsService.urlVideoMovie.replace("[id]",id))
        return axios.get(this.urlsService.urlVideoMovie.replace("[id]",id))
    }
    getSearchMovie = (searchTxt) => {
        console.log(this.urlsService.urlSearchMovie.replace("[searchTxt]",searchTxt))
        return axios.get(this.urlsService.urlSearchMovie.replace("[searchTxt]",searchTxt))
    }
    getRecommendationsMovie = (id) => {
        console.log(this.urlsService.urlSearchMovie.replace("[id]",id))
        return axios.get(this.urlsService.urlRecommendationsVideoMovie.replace("[id]",id))
    }
}

export default new VideoService();