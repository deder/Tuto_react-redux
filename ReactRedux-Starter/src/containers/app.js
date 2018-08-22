import React, { Component } from 'react'
import SearchBar from '../components/search-bar';
import VideoList from './video-list';
import videoService from '../services/video.service';
import VideoDetail from '../components/video-detail';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            currentMovie: {},
            showSearchInput: false
        };
    }
    componentWillMount() {
        videoService.getPopularMovies().then(({ data: { results } }) => {
            let [currentMovie, ...popularMovies] = (results).splice(1, 6);
            this.setState({
                popularMovies
            });
            this.pushYoutubeKeyToCurrentMovie(currentMovie);
        })
    }
    pushYoutubeKeyToCurrentMovie = (currentMovie) => {
        videoService.getUrlVideoMovie(currentMovie.id).then(
            (
                {
                    data: {
                        videos: {
                            results: [firstVideo]
                        }
                    }
                }
            ) => {
                const youtubeKey = firstVideo.key;
                currentMovie.youtubeKey = youtubeKey;
                this.setState({
                    currentMovie
                });
            }
        )
    }
    showForm = (event) => {
        this.setState({
            showSearchInput: true
        });
    }
    searchHandler = (text) => {
        console.log(text);
    }
    clickCardHandler = video => event => {
        this.pushYoutubeKeyToCurrentMovie(video);
    }

    render() {
        const renderMovieList = () => {
            if (this.state.popularMovies.length > 0) {
                return <VideoList onClickCard={this.clickCardHandler} videos={this.state.popularMovies} />
            }
        }
        const renderVideoDetail = () => {
            if (Object.keys(this.state.currentMovie).length > 0) {
                return <VideoDetail youtubeKey={this.state.currentMovie.youtubeKey} title={this.state.currentMovie.title} resume={this.state.currentMovie.overview} release_date={this.state.currentMovie.release_date} />
            }
        }
        return (
            <div className="row" style={{
                backgroundColor: "#E1E2E1"
            }}>
                <header className="col s12">
                    <nav style={{
                        backgroundColor: "#004D40"
                    }}>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo" style={{
                                opacity: 0.8,
                                paddingLeft: "15px"
                            }}>
                                <i className="material-icons">subscriptions</i>My Movies
                            </a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <a href="#" className="waves-effect waves-light">
                                        <i className="material-icons" onClick={this.showForm}>
                                            search
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            <SearchBar onSearch={this.searchHandler} showSearchInput={
                                this.state.showSearchInput
                            } />
                        </div>
                    </nav>
                </header>
                <div className="col l8 m12 s12 offset-l2">
                    {renderMovieList()}
                    {renderVideoDetail()}
                </div>
                <footer className="page-footer" style={{clear: 'both', backgroundColor:"#006958"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col l6 s12">
                                <h5 className="white-text">Footer Content</h5>
                                <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                            </div>
                            <div className="col l4 offset-l2 s12">
                                <h5 className="white-text">Links</h5>
                                <ul>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                                    <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright" style={{
                        backgroundColor:"#004D40"
                    }}>
                        <div className="container">
                            © 2014 Copyright Text
                            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
