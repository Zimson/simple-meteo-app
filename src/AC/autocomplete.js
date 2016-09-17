import { LOAD_DATA, START, SUCCESS, FAIL } from '../constants';
import fetchJsonp from 'fetch-jsonp';

export function autocompleteCity(city='', country='', flag) {

    const adressAPI = flag ? `http://gd.geobytes.com/AutoCompleteCity?filter=${country}&template=<geobytes%20timezone>&q=${city}` : `http://gd.geobytes.com/AutoCompleteCity?filter=${country}&sort=size&template=<geobytes%20city>,%20<geobytes%20iso2>&q=${city}`;

    return (dispatch) => {
        dispatch({
            type: LOAD_DATA + START
        });

        fetchJsonp(adressAPI)
            .then(res => res.json())
            .then(data => {
                dispatch({type: LOAD_DATA + SUCCESS, data})
            })
            .catch(err => dispatch({type: LOAD_DATA + FAIL, err}))
    }
}
