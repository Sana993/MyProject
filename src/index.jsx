import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducer from './redux/reducer.js';
import App from './react/app.jsx'

const initialState = {
    test: 'test'
}

const store = createStore(reducer, initialState)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#appcontainer')
)

