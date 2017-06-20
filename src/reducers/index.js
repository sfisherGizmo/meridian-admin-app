import { combineReducers } from 'redux';
import clientsReducer from './reducer-clients'

const rootReducer = combineReducers({
    client: clientsReducer
});

export default rootReducer;
