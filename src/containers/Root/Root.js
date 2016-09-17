"use strict";
import React, { Component } from 'react';
import Input  from '../../components/Input/Input'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import ForecastList from '../../components/ForecastList/ForecatList';
import Timer from '../../components/Timer/Timer';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadCity, loadWeather, loadForecast  } from '../../AC/loadWeather';
import { autocompleteCity } from '../../AC/autocomplete';
import { loadDate } from '../../AC/loadDate';
import {setTime } from '../../AC/watchTime';
import { startTimer, timerInterval, stopTimer } from '../../AC/setTimer';

class Root extends Component {

    componentWillMount() {
        const { city, country, loadCity, setTime, timeOffset, lat, lon, loadDate } = this.props;
        loadCity(city, country);
        loadDate(lat, lon);
        setTime(timeOffset);
    };


    componentDidMount() {
        const { city, country, loadWeather, loadForecast } = this.props;

        loadWeather(city.toLowerCase(), country.toLowerCase());
        loadForecast(city.toLowerCase(), country.toLowerCase());
    }


    render() {
        const { loadCity , city, country, speed, deg, loadWeather, helpCity, helpCountry, autocompleteCity, loadDate, lat, lon, timeOffset, startTimer, timerInterval, stopTimer, time, icon, tempr, forecast, loadForecast, nowTime } = this.props;

        return (
                <div className="inner-container">
                    <div className="widget-container">
                        <Input city = { city }
                               country = { country }
                               helpCity = { helpCity }
                               helpCountry = { helpCountry }
                               lat = { lat }
                               lon = { lon }
                               timeOffset = { timeOffset }
                               loadWeather = { loadWeather }
                               loadForecast = { loadForecast }
                               loadCity = { loadCity }
                               loadDate = { loadDate }
                               autocomplete = { autocompleteCity }
                        />

                        <Timer time = { time }
                               timeOffset = { timeOffset }
                               city = { city }
                               country = { country }
                               startTimer = { startTimer }
                               timerInterval = { timerInterval }
                               stopTimer = { stopTimer }
                        />

                        <div className="map-container">
                            <a className="map-link" href = { `https://www.google.ru/maps/place/${ city }` } target="_blank">Latest locations</a>
                            <i className="map-ico"></i>
                        </div>
                    </div>


                    <nav className="main-nav">
                        <ul className="link-menu">
                            <li className="item-menu orange">
                                <Link className="item-link weather" to="/" onlyActiveOnIndex={ true } activeClassName="active">Weather</Link>
                            </li>
                            <li className="item-menu blue">
                                <Link className="item-link news" to="/news" activeClassName="active">News & events</Link>
                            </li >
                        </ul>
                    </nav>

                    <div className="weather-container clearfix">
                        <CurrentWeather speed = { speed }
                                        deg = { deg }
                                        lat = { lat }
                                        lon = { lon }
                                        nowTime = { nowTime }
                                        tempr = { tempr }
                                        icon = { icon }
                        />

                        <ForecastList
                            forecasts = { forecast }
                            nowTime = { nowTime }
                        />

                        { this.props.children }
                    </div>



                </div>
        );
    };
}

export default connect((state) => {
    const {
        city: { city, country },
        weather: {
            wind: { speed, deg },
            coord: { lat, lon },
            main: { tempr },
            weather: {
                icon
            }
        },
        forecast,
        helpCity: { helpCity, helpCountry },
        timeOffset: { timeOffset, nowTime },
        timer: { time, isOn },
        timeImg: { timeImg } } = state;

    return { city, country, speed, deg, helpCity, helpCountry, lat, lon, timeOffset, time, isOn, tempr, icon, forecast, timeImg, nowTime };
}, {
    loadCity,
    loadWeather,
    loadForecast,
    autocompleteCity,
    loadDate,
    startTimer,
    timerInterval,
    stopTimer,
    setTime
})(Root);