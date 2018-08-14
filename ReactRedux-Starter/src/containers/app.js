import React, {Component} from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import videoService from '../services/video.service';


class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            popularMovies:[]
        };
    }
    componentWillMount(){
        videoService.getPopularMovies().then((res)=>{
            console.log(res.data.results);
            this.setState({
                popularMovies:res.data.results.slice(1,6)
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
