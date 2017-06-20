import firebase from 'firebase';
import actionTypes from './action-types';

const config = {
    apiKey: "AIzaSyCpT2oKYRVk0kKubhhzdgKJCEtTv_Z6JKY",
    authDomain: "meridanweighttracker.firebaseapp.com",
    databaseURL: "https://meridanweighttracker.firebaseio.com",
    projectId: "meridanweighttracker",
    storageBucket: "meridanweighttracker.appspot.com",
    messagingSenderId: "484036604368"
};

firebase.initializeApp(config);
const database = firebase.database();
export default database;

export const fetchClients = (email) => {
    return dispatch => {
        dispatch(dispatchClients());
        return database
            .ref('clients')
            .orderByChild('email')
            .equalTo(email)
            .on('value', snap => {
                const client = snap.val();
                dispatch(databaseComplete(client));
            });
    }
};

const dispatchClients = () => {
  return {
      type: actionTypes.DISPATCH_CLIENTS
  }
};

const databaseComplete = (client) => {
    return {
        type: actionTypes.DATABASE_FULLFILLED,
        payload: client
    }
};

const clientError = () => {
    return {
        type: actionTypes.ERROR
    }
};
