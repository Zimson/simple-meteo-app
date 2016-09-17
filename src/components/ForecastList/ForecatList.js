"use strict";
import React, { Component, PropTypes } from 'react';
import ForecastItem from '../ForecastItem/ForecastItem';

class ForecastList extends Component {

    static propTypes = {
        forecasts: PropTypes.array.isRequired,
        nowTime: PropTypes.string,
    };

    componentDidUpdate() {
        const { forecasts } = this.props;

        localStorage.setItem('currentForecast', JSON.stringify(forecasts));
    }


    render() {
        const { forecasts, nowTime } = this.props;
        const currentDay = new Date(nowTime).getDay();
        const newForecastList = forecasts.filter((el) => new Date(el.dt*1000).getDay() !== currentDay);

        const forecastBlock = newForecastList.map((el) => {
            const { dt, temp: { eve }, weather: [{ icon }] } = el;

            return (
                <li className="forecast-menu-item" key = { dt/5 }>
                    <ForecastItem
                        dt = { dt }
                        forecastTemp = { eve }
                        forecastIcon = { icon }
                    />
                </li>
            );
        });

        return (
            <ul className="forecast-menu">
                { forecastBlock }
            </ul>
        );
    }
}

export default ForecastList;