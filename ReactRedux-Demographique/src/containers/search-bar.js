import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCountries, getMortality } from '../actions';
import ReactDOM from 'react-dom';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.inputField = React.createRef();
        this.state = {
            selectedCountry:props.defaultCountry
        }
    }
    componentWillMount() {
        this.props.getCountries();
    }
    componentDidMount(){
        const generateListCountries = () => {
            const element = this.inputField.current;
            $(element).ready(function() {
                $(element).formSelect();
            });
        }
        setTimeout(generateListCountries,0);
    }
    setCountry = (event) =>{
        this.setState({
            selectedCountry:event.target.value
        }, this.searchMortality);
    }
    searchMortality = () => {
        this.props.getMortality(this.state.selectedCountry);
    }
    renderCountries = () => {
        const { countries } = this.props;
        console.log(this.props)
        if (countries) {
            return (
                <div className="input-field col s12">
                    <select ref={this.inputField} value={this.state.selectedCountry} onChange={this.setCountry}>
                        <option value="" disabled >Choose a country</option>
                        {
                            countries.map(
                                (country) => {
                                    return <option key={country} value={country}>{country}</option>
                                }
                            )
                        }
                    </select>
                    <label>Country selector</label>
                </div>
            )
        }
        return (<div>No countries !!!!</div>);
    }
    render() {
        return (
            <div>
                {this.renderCountries()}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        mortality: state.mortality
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCountries, getMortality }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);