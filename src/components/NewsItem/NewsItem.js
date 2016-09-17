"use strict";
import React, { Component, PropTypes } from 'react';

class NewsItem extends Component {

    static propTypes = {
        title: PropTypes.string,
        img: PropTypes.string,
        url: PropTypes.string,
        text: PropTypes.string
    };


    render() {
        const { title='---', img='favicon.ico', url='http://google.com', text='---' } = this.props;

        return (
            <article className="newslist-item">
                <div className="newslist-img-wrapper">
                    <img className="newslist-img" src={ img } alt="text" width={ 208 } height={ 117 }/>
                </div>
                <a className="newslist-link" href={ url } target="_blank">
                    <h1 className="newslist-title">{ title }</h1>
                </a>
            </article>
        );
    }
}

export default NewsItem;