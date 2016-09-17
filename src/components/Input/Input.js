"use strict";
import React, { Component, PropTypes } from 'react';

class Input extends Component {

    static propTypes = {
        helpCity: PropTypes.string,
        helpCountry: PropTypes.string,
    };


    state = {
        tempCity: `${this.props.city.trim()}, ${this.props.country.trim()}`,
        city: this.props.city.trim(),
        country: this.props.country.trim(),
        lat: this.props.lat,
        lon: this.props.lon
    };


    render() {
        const { helpCity, helpCountry } = this.props;
        let helpMessage = '';

        if(!helpCity) {
            helpMessage = '';
        } else {
            helpMessage = `${helpCity.trim()}, ${helpCountry.trim()}`;
        }

        return (
                <form className="form-container"  action="#" onSubmit={ this.handlerSubmit }>
                    <span className="fake-placeholder">{ helpMessage }</span>
                    <input type="text" value = { this.state.tempCity } onChange = { this.handlerInput } onKeyDown={ this.fillArea } pattern="^[a-zA-Z\s\-,]+$" required/>
                </form>
        );
    };


    handlerInput = (event) => {
        const { autocomplete } = this.props;

        this.setState({
            tempCity: event.target.value
        }, () => {
            const [ helpCity, helpCountry='' ] = this.state.tempCity.split(',');
            autocomplete(helpCity.toLowerCase(), helpCountry.toLowerCase());
        });
    };


    fillArea = (event) => {
        if(event.keyCode === 39) {
            this.setState({
                tempCity: `${this.props.helpCity.trim()}, ${this.props.helpCountry.trim()}`
            });
        }
    };


    handlerSubmit = (event) => {
        event.preventDefault();
        const { loadWeather, loadCity, loadDate, loadForecast } = this.props;
        const [ city, country='' ] = this.state.tempCity.split(',');

        this.setState({
            city: city.trim(),
            country: country.trim()
        },() => {
            loadCity(this.state.city, this.state.country);
            loadWeather(this.state.city, this.state.country);
            loadForecast(this.state.city, this.state.country);

            setTimeout(() => {
                loadDate(this.props.lat, this.props.lon);
            }, 1000);

            localStorage.setItem('currentCity', JSON.stringify({
                city: this.state.city,
                country: this.state.country.toUpperCase()
            }));
        });
    };
}

export default Input;