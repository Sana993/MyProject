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
    let list = [];
    for (let item in json) {

        list.push(json[item])
    }
    console.log(list[0]);
    let initialState = {
        selectedPhoto: list[0],
        listPhoto: list,
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





