import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Unsplash, {toJson} from 'unsplash-js'

import reducer from './redux/reducer.js';
import Home from './react/app.jsx';
import './styles/style.css';

const unsplash = new Unsplash({accessKey: 'W5oq3JGZopEHoTqc5GPgMrCK4egVDFSn7nV5xhuWIzk'})


unsplash.photos.listPhotos(1, 10, "latest")
  .then(toJson)
  .then(json => {
    let initialState = {
        selectedPhoto: json[0],
        listPhoto: json,
        pageNumber: 1,
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





