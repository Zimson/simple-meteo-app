import { LOAD_DATA, START, SUCCESS, FAIL } from '../constants';

const tempCity = JSON.parse(localStorage.getItem('currentCity'));
let startCity = '';

if(tempCity) {
    startCity = {
        helpCity: tempCity.city,
        helpCountry: tempCity.country
    }
} else {
    startCity = {
        helpCity: 'Vladivostok',
        helpCountry: 'RU'
    }
}


export default (helpCity = startCity, action) => {
    const { type, data } = action;

    switch(type) {
        case LOAD_DATA + START:
            return helpCity;

        case LOAD_DATA + SUCCESS:
            let [ dataCity='', dataCountry='' ] = data[0].split(',');

            if(dataCity === '%s') {
                dataCity = '';
            }

            return helpCity = {
                helpCity: dataCity,
                helpCountry: dataCountry
            };

        case LOAD_DATA + FAIL:
            return helpCity= {
                helpCity: '',
                helpCountry: ''
            };
    }

    return helpCity;
};