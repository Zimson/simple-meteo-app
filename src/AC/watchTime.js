"use strict";
import { SET_TIME } from '../constants';

export function setTime(timeImg) {
    return {
        type: SET_TIME,
        payload: {
            timeImg
        }
    }
}
