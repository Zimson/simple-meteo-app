import { LOAD_TIME, START, SUCCESS, FAIL } from '../constants';

const tempOffset = localStorage.getItem('GMT');

const startOffset = tempOffset ? JSON.parse(tempOffset) : {
    timeOffset: '10',
    nowTime: '2016-09-15 18:57'
};

export default (timeOffset = startOffset, action) => {
    const { type, data } = action;

    switch (type) {
        case LOAD_TIME + START:
            return timeOffset;

        case LOAD_TIME + SUCCESS:
            localStorage.setItem('GMT', JSON.stringify({timeOffset: data.dstOffset, nowTime: data.time}));

            return Object.assign({}, timeOffset, {
                timeOffset: data.dstOffset,
                nowTime: data.time
            });

        case LOAD_TIME + FAIL:
            return Object.assign({}, timeOffset, {
                timeOffset: '0',
                nowTime: '0'
            });
    }

    return timeOffset;
};