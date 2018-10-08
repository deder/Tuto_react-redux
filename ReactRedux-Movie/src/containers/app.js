import React, { Component } from 'react'
import SearchBar from '../components/search-bar';
import VideoGrid from './video-grid';
import videoService from '../services/video.service';
import VideoDetail from '../components/video-detail';
import VideoList from './video-list';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            popularMovies: [],
            recommendMovies: [],
            recommandMovies: [],
            currentMovie: {},
            showSearchInput: false
        };
    }
    componentWillMount() {
        this.initPopularAndCurrentMovies();
    }
    initPopularAndCurrentMovies = () => {
        videoService.getPopularMovies().then(({ data: { results } }) => {
            let [currentMovie, ...popularMovies] = (results).splice(1, 6);
            this.setState({
                popularMovies
            }, () => {
                this.pushYoutubeKeyToCurrentMovie(currentMovie);
            });

        })
    }
    setRecommendations = (idMovie) => {
        return videoService.getRecommendationsMovie(idMovie).then(({ data: { results } }) => {
            return results;
        });
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
                if (firstVideo && firstVideo.key) {
                    const youtubeKey = firstVideo.key;
                    currentMovie.youtubeKey = youtubeKey;
                }
                this.setRecommendations(currentMovie.id).then((recommendMovies) => {
                    this.setState({
                        recommandMovies: recommendMovies,
                        currentMovie
                    }, (arg) => {
                        this.state.recommandMovies
                    });
                }
                );

            }
        )
    }
    toogleShowForm = (event) => {
        this.setState(prevState => {
            return ({ showSearchInput: !prevState.showSearchInput })
        });
    };
    searchHandler = (text) => {
        videoService.getSearchMovie(text).then(
            ({
                data: {
                    results
                }
            }) => {
                if (results && results.length > 0) {
                    this.pushYoutubeKeyToCurrentMovie(results[0])
                }
            }
        );
    }
    clickCardHandler = video => event => {
        this.pushYoutubeKeyToCurrentMovie(video);
    }
    render() {
        const renderSearchBar = () => {
            if (this.state.showSearchInput)
                return (<SearchBar onSearch={this.searchHandler} toogleShowForm={this.toogleShowForm} />)
        }
        const renderMovieList = () => {
            if (this.state.recommandMovies.length > 0) {
                const recommandMoviesCopie = JSON.parse(JSON.stringify(this.state.recommandMovies));
                return <VideoList onClickCard={this.clickCardHandler} videos={recommandMoviesCopie.splice(0, 5)} />
            }
        }
        const renderMovieGrid = () => {
            if (this.state.popularMovies.length > 0) {
                return <VideoGrid onClickCard={this.clickCardHandler} videos={this.state.popularMovies} />
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
                            <ul id="nav-mobile" className="right">
                                <li>
                                    <a href="#" className="waves-effect waves-light">
                                        <i className="material-icons" onClick={this.toogleShowForm}>
                                            search
                                        </i>
                                    </a>
                                </li>
                            </ul>
                            {renderSearchBar()}

                        </div>
                    </nav>
                </header>
                <div className="col l8 m12 s12 offset-l2" style={{}}>
                    <div className="row">
                        <div className="col l10 m10 offset-m1 s12">
                            {renderVideoDetail()}
                        </div>

                        <div className="col l2 m10 offset-m1 s12">
                            {renderMovieList()}
                        </div>
                    </div>
                    <div className="row hide-on-small-only">
                        {renderMovieGrid()}
                    </div>
                </div>
                <footer className="page-footer" style={{ clear: 'both', backgroundColor: "#006958" }}>
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
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright" style={{
                        backgroundColor: "#004D40"
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
