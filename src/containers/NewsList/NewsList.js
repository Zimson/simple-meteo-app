"use strict";
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadNews } from '../../AC/loadNews';
import NewsItem from '../../components/NewsItem/NewsItem';

class NewsList extends Component {

    componentDidMount() {
        const { loadNews } = this.props;
        loadNews();
    }

    componentDidUpdate() {
        const { news } = this.props;

        localStorage.setItem('oldNews', JSON.stringify(news));
    }

    render() {
        const { news } = this.props;
        const newsBlock = news.map((el) => {
            const { title='Loading...', url='Loading...', urlToImage='img/loading.gif', publishedAt='Loading...' } = el;

            return (
                <li className="newslist-menu-item" key = { new Date(publishedAt)  }>
                    <NewsItem
                        img = { urlToImage }
                        title = { title }
                        url = { url }
                    />
                </li>
            );
        });

        return (
            <div className="newslist-container">
                <ul className="newslist-menu">
                    { newsBlock }
                </ul>
            </div>
        );
    }
}

export default connect((state) => {
    const { news } = state;
    return { news };
}, {
    loadNews
})(NewsList);