import React, { Component } from 'react';

import SearchBar from '../containers/search-bar'
import ClientList from '../containers/client-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ClientList />
      </div>
    );
  }
}
