import { SET_TIME } from '../constants';

const tempOffset = localStorage.getItem('GMT');
const startOffset = tempOffset ? JSON.parse(tempOffset).timeOffset : '10';

const getTime = (offset) => {
    const localDate = new Date();

    let hours = localDate.getHours(),
        localOffset = localDate.getTimezoneOffset()/60;

    hours = Number(hours) + Number(localOffset) + Number(offset);

    return `${hours.toString()}`;
};

const startTime = getTime(startOffset);

export default (timeImg = startTime, action) => {
    const { type } = action;

    switch (type) {
        case SET_TIME:
            const currentTime = getTime(startOffset);
            return Object.assign({}, timeImg, {
                timeImg: currentTime
            });
    }

    return timeImg;
};