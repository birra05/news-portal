import React, { Component } from 'react';

import './styles.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <span>Главная</span>
        <a href="">Войти</a>
      </header>
    );
  }
}

export default Header;