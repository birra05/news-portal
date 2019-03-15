import React, { Component } from 'react';

import Header from '../Header';
import NewsItem from '../NewsItem';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <NewsItem />
        </main>
      </div>
    );
  }
}

export default App;
