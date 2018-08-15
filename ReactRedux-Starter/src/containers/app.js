import React, {Component} from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import videoService from '../services/video.service';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies:[],
            currentMovie:{}
        };
    }
    componentWillMount(){
        videoService.getPopularMovies().then(({data: {results}})=>{
            let [currentMovie,...popularMovies] = (results).splice(1,6);
            this.setState({
                popularMovies,
                currentMovie
            });
        })
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.popularMovies}/>
            </div>
        );
    }
}

export default App;
