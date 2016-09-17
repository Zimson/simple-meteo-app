"use strict";
import { SET_TIMER, START, TICK, STOP } from '../constants';

const initialState = {
    time: new Date()
};

export default (state = initialState, action) => {
    const { type, interval, offset, time } = action;

    switch (type) {
        case SET_TIMER + START:
            return {
                ...state,
                offset: offset
            };

        case SET_TIMER + TICK:
            return {
                ...state,
                time: state.time + (time - state.offset),
                offset: time
            };

        case SET_TIMER + STOP:
            clearInterval(state.interval);
            return {
                time: state.time
            };

        default:
            return state;
    }
}