import React, {Component} from 'react';

class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state = {
            searchText:"",
            placeHolder:"Entrer le nom d'un film"
        }
    }
    render(){
        return (
            <div>
                <input onChange={this.searchHandler} value={this.state.searchText} placeholder={this.state.placeHolder}/>
                {this.state.searchText}
            </div>
        );
    }
    searchHandler = (event) => {
        this.setState(
            {
                searchText : event.target.value
            }
        );
    }
}
export default SearchBar;