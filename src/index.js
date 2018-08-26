import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers';


import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from "redux";
import reducer from './reducers'
import rootSaga from './sagas'
import {Provider} from 'react-redux'
import {Route} from "react-router";
import {BrowserRouter} from 'react-router-dom'
import Login from "./components/Login";
import Register from "./components/Register";
import TopBar from "./components/TopBar";

import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <TopBar/>
                <Route exact path='/' component={App} />
                <Route path='/login' component={Login} />
                <Route path='/register' component={Register} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
