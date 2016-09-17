import loadCityReducer from './loadCityReducer';
import loadWeatherReducer from './loadWeatherReducer';
import loadForecastReducer from './loadForecatReducer';
import autocompleteReducer from './autocompleteReducer';
import loadDateReducer from './loadDateReducer';
import loadNewsReducer from './loadNewsReducer';
import setTimeReducer from './setTimeReducer';
import timerReducer from './timerReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    city: loadCityReducer,
    weather: loadWeatherReducer,
    helpCity: autocompleteReducer,
    timeOffset: loadDateReducer,
    timeImg: setTimeReducer,
    timer: timerReducer,
    forecast: loadForecastReducer,
    news: loadNewsReducer
});
