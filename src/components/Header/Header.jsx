import React, { Component } from 'react';

import './styles.scss';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  signIn = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    GoogleAuth
      .signIn({scope: 'profile email'})
      .then(user => this.setState({name: user.getBasicProfile().getName()}))
      .catch(error => console.log('Sign in error', error));
  };

  signOut = () => {
    const GoogleAuth = window.gapi.auth2.getAuthInstance();

    GoogleAuth
      .signOut()
      .then(() => this.setState({ name: '' }))
      .catch(error => console.log('Sign out error', error));
  };

  render() {
    const { name } = this.state;

    return (
      <header className="header">
        <span>Главная</span>
        {name ? (
          <div>
            <span>{name}</span>
            <button type="button" onClick={this.signOut}>Выйти</button>
          </div>
        ) : (
          <button type="button" onClick={this.signIn}>Войти</button>
        )}
      </header>
    );
  }
}

export default Header;