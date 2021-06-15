import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, compose, applyMiddleware, combineReducers} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import usersReducer from './reducers/usersReducer'
import userReducer from './reducers/userReducer'
import profileReducer from './reducers/profileReducer'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

const initialState = {}

// this sends these keys/values to Redux state
const combinedReducer = combineReducers({profile: profileReducer, users: usersReducer, user: userReducer})

const store = createStore(combinedReducer, initialState, compose(applyMiddleware(thunk), composeWithDevTools()))

ReactDOM.render(
  <Router >
    {/* provider gives access to data in redux store 
    sends the store to the Provider component as a prop 
    so that child elements can access the state */}
    <Provider store={store}>
        <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);

