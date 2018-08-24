import React, { Component } from 'react';
import SearchBar from '../containers/search-bar';
import { getCountries } from './../actions/index';

class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default App;
