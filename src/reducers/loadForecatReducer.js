"use strict";
import { FORECAST_LOAD, START, SUCCESS, FAIL } from '../constants';

const tempForecast = localStorage.getItem('currentForecast');
const defaultForecast = tempForecast ? JSON.parse(tempForecast) : [];


export default (forecast = defaultForecast, action) => {
    const { type, data } = action;

    switch(type) {
        case FORECAST_LOAD + START:
            return forecast;

        case FORECAST_LOAD + SUCCESS:
            if(data.cod === '404') {
                return forecast = [];
            }

            const forecastList = data.list.slice(1);

            return forecast = forecastList;

        case FORECAST_LOAD + FAIL:
            return forecast;
    }

    return forecast;
};
