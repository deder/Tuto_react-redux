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
            currentMovie:{},
            showSearchInput:false
        };
    }
    componentWillMount(){
        videoService.getPopularMovies().then(({data: {results}})=>{
            let [currentMovie,...popularMovies] = (results).splice(1,6);
            videoService.getUrlVideoMovie(currentMovie.id).then(
            (
                {
                    data: {
                        videos: {
                            results:[firstVideo]
                        }
                    }
                }
            )=>
                {
                    const youtubeKey = firstVideo.key;
                    currentMovie.youtubeKey = youtubeKey;
                    this.setState({
                        popularMovies,
                        currentMovie
                    });
                }
            )
        })
    }
    showForm = (event)=>{
        this.setState({
            showSearchInput:true
        });
    }



    render(){
        const renderMovieList = ()=>{
            if(this.state.popularMovies.length > 0){
                return <VideoList videos={this.state.popularMovies}/>
            }
        }
        const renderVideoDetail = ()=>{
            if(Object.keys(this.state.currentMovie).length > 0){
                return <VideoDetail youtubeKey={this.state.currentMovie.youtubeKey} title={this.state.currentMovie.title} resume={this.state.currentMovie.overview} release_date={this.state.currentMovie.release_date}  />
            }
        }
        return (
            <div className="row" style={{
                backgroundColor:"#E1E2E1"
            }}>
                <header className="col s12">
                    <nav style={{
                        backgroundColor:"#004D40"
                    }}>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo" style={{
                                opacity:0.8,
                                paddingLeft:"15px"
                            }}>
                                <i className="material-icons">subscriptions</i>My Movies
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <a href="#" className="waves-effect waves-light">
                                        <i className="material-icons" onClick={ this.showForm }>
                                            search
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            <SearchBar showSearchInput={
                                this.state.showSearchInput
                            } />
                        </div>
                    </nav>
                </header>
                <div  className="col l8 m12 s12 offset-l2">        
                    {renderMovieList()}
                    {renderVideoDetail()}
                </div>
            </div>
        );
    }
}

export default App;
