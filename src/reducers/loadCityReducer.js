import { LOAD_CITY } from '../constants';

const tempCity = JSON.parse(localStorage.getItem('currentCity'));

const startCity = tempCity ? tempCity : {
    city: 'Vladivostok',
    country: 'RU'
};


export default (city = startCity, action) => {
    const { type, payload } = action;

    switch (type) {
        case LOAD_CITY:
            return Object.assign({}, city, {
                city: payload.city,
                country: payload.country
            });
    }

    return city;
};