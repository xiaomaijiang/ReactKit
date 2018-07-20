import * as actionTypes from '../constants/index';

const add = (data) => {
    return {
        type: actionTypes.SAMPLE_ADD,
        data
    }
};

const load = (data) => {
    return {
        type: actionTypes.SAMPLE_LOAD,
        data
    }
};
export {add, load};