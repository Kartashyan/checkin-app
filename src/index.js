import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers'
import rootSaga from './sagas'
import {Provider} from 'react-redux'
import history from './history'
import 'react-toastify/dist/ReactToastify.css'
import registerServiceWorker from './registerServiceWorker';
import {firebaseApp} from "./firebase";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

// firebaseApp.auth().onAuthStateChanged(user=> {
//     if(user){
//         const {email} = user;
//         // store.dispatch(logUser(email));
//         console.log(email);
//         history.push('/');
//     }
//     else {
//         history.replace('/signin');
//     }
// });
ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
