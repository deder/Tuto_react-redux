import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import { getCountries, getMortality } from './../actions/index';
const DEFAULT_COUNTRY= "France";
class App extends Component {
  render() {
    return (
      <div>
        <SearchBar defaultCountry={DEFAULT_COUNTRY} />
      </div>
    );
  }
}

export default App;
