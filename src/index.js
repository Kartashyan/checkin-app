import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers'
import rootSaga from './sagas'
import {Provider} from 'react-redux'
import 'react-toastify/dist/ReactToastify.css'
import registerServiceWorker from './registerServiceWorker';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
