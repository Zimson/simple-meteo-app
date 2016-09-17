import { WEATHER_LOAD, START, SUCCESS, FAIL } from '../constants';

const defaultWeather = {
    coord: {
        lat: '43.11',
        lon: '131.87'
    },
    wind: {
        deg: '000',
        speed: '000'
    },
    main: {
        tempr: '54'
    },
    weather: {
        icon: '01d'
    }
};
const localWeather = JSON.parse(localStorage.getItem('currentWeather'));
const startWeather = !localWeather ? defaultWeather : localWeather;


export default (weather = startWeather, action) => {
    const { type, data } = action;

    switch(type) {
        case WEATHER_LOAD + START:
            return weather;

        case WEATHER_LOAD + SUCCESS:
            if(data.cod === '404') {
                return weather = {
                    coord: {
                        lat: '00.00',
                        lon: '000.00'
                    },
                    wind: {
                        deg: '000',
                        speed: '000'
                    },
                    main: {
                        tempr: 'err'
                    },
                    weather: {
                        icon: '01d'
                    }
                };
            }

            const { wind: { deg=0, speed=0 }, coord: { lat='00.000', lon='000.00'}, dt, main: { temp }, weather: [{ icon }] } = data;
            const newDt = new Date(dt*1000).getDay();

            return Object.assign({}, weather, {
                coord: {
                    lat: data.coord.lat,
                    lon: data.coord.lon
                },
                wind: {
                    deg: deg,
                    speed: speed
                },
                main: {
                    tempr: temp
                },
                weather: {
                    icon: icon
                }
            });

        case WEATHER_LOAD + FAIL:
            return Object.assign({}, weather, {
                coord: {
                    lat: '43.11',
                    long: '131.87'
                },
                wind: {
                    deg: '00',
                    speed: '00'
                },
                main: {
                    temp: 'err'
                },
                weather: {
                    icon: '01d'
                }
            });
    }

    return weather;
};
