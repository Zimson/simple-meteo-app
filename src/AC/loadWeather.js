"use strict";
import { LOAD_CITY, WEATHER_LOAD, FORECAST_LOAD, START, SUCCESS, FAIL, WEATHER_API_KEY } from '../constants';

export function loadCity(city, country) {
    return {
        type: LOAD_CITY,
        payload: {
            city,
            country
        }
    }
}

export function loadWeather(city, country) {
    let adressAPI = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country.toLowerCase()}&type=accurate&units=imperial&mode=json&appid=${WEATHER_API_KEY}`;


    return (dispatch) => {
        dispatch({
            type: WEATHER_LOAD + START
        });

        fetch(adressAPI)
            .then(res => res.json())
            .then(data => {
                dispatch({type: WEATHER_LOAD + SUCCESS, data})
            })
            .catch(err => dispatch({type: WEATHER_LOAD + FAIL, err}))
    }
}


export function loadForecast(city, country) {
    const adressAPI = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${city.toLowerCase()},${country.toLowerCase()}&type=accurate&units=imperial&mode=json&&cnt=8&appid=${WEATHER_API_KEY}`;

    return (dispatch) => {
        dispatch({
            type: FORECAST_LOAD + START
        });

        fetch(adressAPI)
            .then(res => res.json())
            .then(data => {
                dispatch({type: FORECAST_LOAD + SUCCESS, data})
            })
            .catch(err => dispatch({type: FORECAST_LOAD + FAIL, err}))
    }
}
