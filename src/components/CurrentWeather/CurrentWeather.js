"use strict";
import React, {Component, PropTypes} from 'react';

class WeatherLog extends Component {

    static propTypes = {
        deg: PropTypes.string,
        speed: PropTypes.string,
        icon: PropTypes.string,
        tempr: PropTypes.string,
        nowTime: PropTypes.string
    };

    formatDay(nowTime) {
        const localDate = new Date(nowTime),
              day = localDate.getDay(),
              weekDay = localDate.getDate();


        const dayList = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday'
        ];

        const dateList = [
            'th',
            'st',
            'nd',
            'rd'
        ];

        const dayIndex = dayList.findIndex((el, index) => weekDay > 3 ? index === 0 : index === weekDay);
        const currentDay = dayList.findIndex((el, index) => index === day);

        return {
            day: dayList[currentDay],
            weekDay: weekDay,
            dayIndex: dateList[dayIndex]
        };
    }


    componentDidUpdate() {
        const { deg, speed, lat, lon, dt, tempr, icon } = this.props;

        localStorage.setItem('currentWeather', JSON.stringify({
            wind: {
                deg: deg,
                speed: speed
            },
            coord: {
                lat: lat,
                lon: lon
            },
            main: {
                tempr: tempr
            },
            weather: {
                icon: icon
            }
        }));
    }

    render() {
        const { deg, speed, icon, tempr, nowTime } = this.props;

        return (
            <div className="current-weather clearfix">
                <div className="columns weather-leftblock ">
                    <p className="current-temperature">
                        { Math.round(tempr) }<sup className="current-temperdegree">°</sup>
                    </p>
                    <span className="current-day">
                        { `${this.formatDay(nowTime).day} ${this.formatDay(nowTime).weekDay}` } <sup className="current-day-index">{ this.formatDay(nowTime).dayIndex }</sup>
                    </span>
                </div>
                <div className="current-rightblock ">
                    <img className="current-cloud" src={ `img/${ icon }.svg` } alt={ `"${ icon }"` } width={ 150 } height={ 100 }/>
                    <span className="current-wind">{ `${parseInt(speed, 10)} mph / ${parseInt(deg, 10)}°` }</span>
                </div>
            </div>
        );
    }
}

export default WeatherLog;