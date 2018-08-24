import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { getCountries } from '../actions';

class SearchBar extends Component{
    componentWillMount(){
        this.props.getCountries();
    }
    getCountriesDomNode = () =>{
        if(this.props.countries){
            return this.props.countries.map(
                (country)=>{
                    (<div>{country}</div>)
                }
            )
        }
        return [];

    }
    render(){
        return (
            <div>
                {this.getCountriesDomNode()}
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return {
        countries:state.countries
    }
}
const mapDispatchToProps = (dispatch)=>{
    return bindActionCreators({getCountries}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);