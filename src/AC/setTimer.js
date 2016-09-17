"use strict";
import { SET_TIMER, START, TICK, STOP } from '../constants';

export function startTimer() {
    return (dispatch) => {
        dispatch({
            type: SET_TIMER + START,
            offset: Date.now()
        });
    }
}


export function timerInterval() {
    return (dispatch) => {
        setInterval(() => {
            dispatch({
                type: SET_TIMER + TICK,
                time: Date.now()
            });
        }, 1000);
    }
}


export function stopTimer() {
    return (dispatch) => {
        dispatch({
           type: SET_TIMER + STOP
        });
    }
}