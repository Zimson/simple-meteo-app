"use strict";
import React, { Component, PropTypes } from 'react';

class Timer extends Component {

    static propTypes = {
        timeOffset: PropTypes.string,
        city: PropTypes.string,
        timerInterval: PropTypes.string
    };


    formatTime(timeZone) {
        const localDate = new Date();

        let hours = localDate.getHours(),
            minutes = localDate.getMinutes(),
            localOffset = localDate.getTimezoneOffset()/60,
            dayTime = 'am';

        hours = Number(hours) + Number(localOffset) + Number(timeZone);

        if(hours >= 13 && hours <= 23) {
            dayTime = 'pm';
            hours = Number(hours) - 12;
        } else if(hours === 12 || hours < 0) {
            dayTime = 'pm';
        } else if(hours === 0) {
            dayTime = 'am';
            hours = 12;
        }

        if(hours < 10) hours = `0${Math.abs(hours).toString()}`;
        if (minutes < 10) minutes = `0${minutes.toString()}`;

        return `${hours}:${minutes} ${dayTime}`;
    }

    componentDidMount() {
        const { startTimer, timerInterval } = this.props;
        startTimer();
        timerInterval();
    }

    render() {
        const { timeOffset, city, country } = this.props;

        return (
            <div className="timer-container">
                <img className="timer-img" src="/img/pointer-time.svg" alt="timeSign" width={ 80 } height={ 50 }/>
                <span className="timer-city">{ `${city}, ${country}` }</span>
                <span className="timer-text">{ this.formatTime(timeOffset) }</span>
            </div>
        );
    }
}

export default Timer;