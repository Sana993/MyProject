import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Unsplash, {toJson} from 'unsplash-js'

import reducer from './redux/reducer.js';
import Home from './react/app.jsx';
import './styles/style.css';

const unsplash = new Unsplash({
    accessKey: 'W5oq3JGZopEHoTqc5GPgMrCK4egVDFSn7nV5xhuWIzk',
    secret: 'eL4dsy5AyDJKEg55gJEgx6OGidJjHCjjEVZ3-bPgn-Q',
    callbackUrl: 'http://localhost:8080/auth',
})

if (localStorage.getItem('accessToken')) {
    if ('токен не тухлый') {
        unsplash.auth.setBearerToken(localStorage.getItem('accessToken'))
    }
}

unsplash.photos.listPhotos(1, 10, "popular")
  .then(toJson)
  .then(json => {
    let initialState = {
        unsplash: unsplash,
        selectedPhoto: 0,
        listPhoto: json,
        photoNumber: 10,
        showBackCard: {
            hover: false,
            click: false
        },
    }

    const store = createStore(reducer, initialState)
   
    ReactDOM.render(
        <Provider store={store}>
            <Home />
        </Provider>,
        document.querySelector('#appcontainer')
    )
  });





