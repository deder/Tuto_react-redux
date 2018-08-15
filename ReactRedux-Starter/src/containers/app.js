import React, {Component} from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import videoService from '../services/video.service';
import VideoDetail from '../components/video-detail';

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
                <VideoDetail title={this.state.currentMovie.title} resume={this.state.currentMovie.overview} release_date={this.state.currentMovie.release_date}  />
            </div>
        );
    }
}

export default App;
