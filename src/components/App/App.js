import React, { Component } from 'react';

import Header from '../Header';
import NewsItem from '../NewsItem';

import './App.scss';

class App extends Component {
  componentDidMount() {
    window.gapi.load('auth2', function() {
      window.gapi.auth2
        .init({client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID})
        .then(auth2 => console.log('init OK', auth2))
        .catch(error => console.log('error', error));
    });
  }

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
