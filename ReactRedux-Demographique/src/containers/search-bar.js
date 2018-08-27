import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCountries } from '../actions';
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
        });
    }
    renderCountries = () => {
        const { countries } = this.props;
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
        countries: state.countries
    }
}
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getCountries }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);