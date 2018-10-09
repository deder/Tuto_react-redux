import React, { Component } from 'react';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: "",
            placeHolder: "Entrer le nom d'un film",
            onSearch:props.onSearch,
            intervalTime:1000,
            lockTimeout:false,
            toogleShowForm:props.toogleShowForm
        }
    }

    onEnterHandler = (event) => {
        if (event.key === 'Enter') {
            setTimeout( this.setSearch(event.target.value))
            event.preventDefault();
        }
    }
    setSearch = (value) =>() => {
        this.state.onSearch(value);
        this.setState({
            lockTimeout:false
        });
    }
    setTimedSearch = (value) => {
        if( !this.state.lockTimeout){
            this.setState({
                lockTimeout:true
            },()=>{
                setTimeout(this.setSearch(value), this.state.intervalTime);
            })
           
        }
    }
    onChangeHandler= (event) => {
        this.setTimedSearch(event.target.value);
    }
    render() {
        return (
            <form id="formSearch" style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                backgroundColor: "white"
            }} >
                <div>
                    <i className="material-icons" onClick={this.state.toogleShowForm} style={{
                        position: "absolute",
                        right: 0,
                        paddingLeft: "20px",
                        paddingRight: "20px",
                        zIndex: 5,
                        color: "black",
                        cursor: "pointer"
                    }}>close</i>
                    <input id="search" type="search" onChange={this.onChangeHandler} onKeyPress={this.onEnterHandler} value={this.state.searchText} placeholder={this.state.placeHolder} style={{
                        paddingLeft: "24px",
                        paddingRight: "24px",
                        color: "grey"
                    }} />
                </div>
            </form>


        );
    }
}
export default SearchBar;