import axios from 'axios'
import IhmConfig from '../configs/ihm.config';

class VideoService {
    urlsService = {
        popularMovies: `${IhmConfig.API_END_POINT}discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=${IhmConfig.API_KEY}`
    }
    getPopularMovies = () => {
        return axios.get(this.urlsService.popularMovies)
    }
}

export default new VideoService();