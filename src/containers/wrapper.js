import React, { Component } from 'react';
import store from '../store/store';
import { Provider } from 'react-redux';


class RootContainer extends Component {

    render() {
        return (
            <Provider store = { store }>
                <div className="app-container">
                    { this.props.children }
                </div>
            </Provider>
        );
    }
}

export default RootContainer;
