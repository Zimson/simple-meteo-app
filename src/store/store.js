"use strict";
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducers/reducer';
import logger from '../middlewares/logger';
import thunk from 'redux-thunk';


const enhancer = compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
);

const store = createStore(reducer, {}, enhancer);


export default store;