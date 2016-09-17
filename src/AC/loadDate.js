import { LOAD_TIME, START, SUCCESS, FAIL } from '../constants';
import fetchJsonp from 'fetch-jsonp';

export function loadDate(lat, long) {
    const adressAPI = `http://api.geonames.org/timezoneJSON?lat=${lat}&lng=${long}&username=zinsondv`;

    return (dispatch) => {
        dispatch({
            type: LOAD_TIME + START
        });

        fetch(adressAPI)
            .then(res => res.json())
            .then(data => {
                dispatch({type: LOAD_TIME + SUCCESS, data})
            })
            .catch(err => dispatch({type: LOAD_TIME + FAIL, err}))
    }
}
