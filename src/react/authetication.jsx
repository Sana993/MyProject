import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import Unsplash from 'unsplash-js';

import styles from '../styles/authentification.css'
import { setUnsplash } from '../redux/actioncreators.js'

const newUnsplash = new Unsplash ({
    accessKey: 'W5oq3JGZopEHoTqc5GPgMrCK4egVDFSn7nV5xhuWIzk',
    secret: 'eL4dsy5AyDJKEg55gJEgx6OGidJjHCjjEVZ3-bPgn-Q',
    callbackUrl: 'http://localhost:8080/auth',
})


function Authentication ({unsplash, setUnsplash}) {
    console.log('render');

    const code = location.search.split('code=')[1]

    if (code && !unsplash._bearerToken) {

        newUnsplash.auth.userAuthentication(code)
            .then(res=>res.json())
            .then(json=>{
                console.log(json);
                newUnsplash.auth.setBearerToken(json.access_token)
                localStorage.setItem('accessToken', json.access_token)
                console.log(newUnsplash);
                setUnsplash(newUnsplash)
            })
    }

    return (
        <div className={styles.container}>
            <button className={styles.button}>back</button>
            <Link to='/'>Back</Link>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        unsplash: state.unsplash,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setUnsplash: bindActionCreators(setUnsplash, dispatch)
    }
}

Authentication = connect(
    mapStateToProps,
    mapDispatchToProps
)(Authentication)

export default Authentication