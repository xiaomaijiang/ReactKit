import * as actionTypes from '../constants/index';

export default {
    add: (data) => {
        return {
            type: actionTypes.SAMPLE_ADD,
            data
        }
    },
    load: (data) => {
        return {
            type: actionTypes.SAMPLE_LOAD,
            data
        }
    }
}
