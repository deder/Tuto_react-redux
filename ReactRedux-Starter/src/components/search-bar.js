import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            placeHolder: "Entrer le nom d'un film",
            showSearchInput: props.showSearchInput
        }
    }
    componentWillReceiveProps(props) {
        this.state = {
            showSearchInput: props.showSearchInput
        }
    }
    hideForm = () => {
        this.setState({
            showSearchInput: false
        });
    }
    onEnter = (event) => {
        if (event.key === 'Enter') {
            console.log(event.target.value)
            event.preventDefault();
        }
    }
    render() {
        return (
            <form className={this.state.showSearchInput ? "" : "hide"} id="formSearch" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "white"
            }} >
                <div>
                    <i className="material-icons" onClick={this.hideForm} style={{
                        position: "absolute",
                        right: 0,
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        zIndex: 5,
                        color: "black",
                        cursor: "pointer"
                    }}>close</i>
                    <input id="search" type="search" onKeyPress={this.onEnter} value={this.state.searchText} placeholder={this.state.placeHolder} style={{
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        color: "grey"
                    }} />
                </div>
            </form>


        );
    }
    searchHandler = (event) => {
        this.setState(
            {
                searchText: event.target.value
            }
        );
    }
}
export default SearchBar;