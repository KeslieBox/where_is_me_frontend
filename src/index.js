import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
// import {createBrowserHistory} from 'history'
import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

const initialState = {users: []}

// const combinedReducer = combineReducers({lists: listsReducer, users: usersReducer}

const store = createStore(usersReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

console.log(store)
ReactDOM.render(
  <Router >
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
