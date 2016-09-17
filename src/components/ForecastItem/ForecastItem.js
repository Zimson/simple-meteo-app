"use strict";
import React, { Component, PropTypes } from 'react';

class ForecastItem extends Component {

    static propTypes = {
        dt: PropTypes.string,
        forecastIcon: PropTypes.string,
        forecastTemp: PropTypes.string
    };


    formatDay(day) {
        const dayList = [
            'SUN',
            'MON',
            'TUE',
            'WED',
            'THU',
            'FRI',
            'SAT'
        ];

        if(day !== '---') {
            const currentDay = dayList.findIndex((el, index) => index === new Date(day*1000).getDay());
            return `${dayList[currentDay]}`
        }

        return day;
    }


    render() {
        const { dt='---', forecastIcon='---', forecastTemp='---' } = this.props;
        return (
            <div className="forecast-item">
                <div className="forecast-title-wrapper">
                    <span className="forecast-title">{ this.formatDay(dt) }</span>
                </div>
                <img className="forecast-img" src={ `img/${ forecastIcon }.svg` } alt={ `${forecastIcon}` } width={ 50 } height={ 50 }/>
                <p className="forecast-temp">{ Math.round(forecastTemp) }<sup className="forecast-temp-index">°</sup></p>
            </div>
        );
    }
}

export default ForecastItem;