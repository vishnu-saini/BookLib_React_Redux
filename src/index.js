import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/containers/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import StudentReducer from './app/reducers/StudentReducer';
import BookReducer from './app/reducers/BookReducer';
import logger from 'redux-logger';

const myCustomLogger = (store) => (next) => (action) => {
    console.log("Logged Action : ", action);
    next(action);
}

const store = createStore(combineReducers({  student: StudentReducer, book: BookReducer }), {}, applyMiddleware(logger,myCustomLogger));

store.subscribe(() =>
    console.log("Store updated ", store.getState())
)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));


registerServiceWorker();
