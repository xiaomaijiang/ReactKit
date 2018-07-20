import * as actionTypes from '../constants/index';
import request from '../util/request';

const initialState = {
    count: 0
};
const sample = async (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAMPLE_ADD:
            state.count += action.data;
            return Object.assign({}, state);
        case actionTypes.SAMPLE_LOAD:
            let result = await request.asyncGet(`${window.globalConfig.host}/stars`)
            let content = await result.json();
            return Object.assign({}, state);
        default:
            return state
    }
};

export default sample;
