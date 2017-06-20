import actionTypes from '../actions/action-types';

export default function (state = [], action) {
    switch (action.type) {
        case actionTypes.DATABASE_FULLFILLED:
            return [action.payload, ...state]
    }
    return state;
}