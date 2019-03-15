import React, { Component } from 'react';

import editIcon from '../../assets/images/icons/pen-solid.svg';

import './styles.scss';

class NewsItem extends Component {
  render() {
    const { header, author, date, text } = this.props;

    return (
      <article className="news-item">
        <div className="news-item__header">
          <h2>{header}</h2>
          <div className="news-item__manage-block">
            <button className="news-item__button">Редактировать</button>
            <button className="news-item__button">Удалить</button>
          </div>
        </div>
        <div className="news-item__sub-info">
          <span className="news-item__author">{author}</span>
          <span style={{ marginLeft: '10px', marginRight: '10px' }}>|</span>
          <span className="news-item__date">{date}</span>
        </div>
        <p className="news-item__summary-text">
          {text}
        </p>
      </article>
    );
  }
}

export default NewsItem;