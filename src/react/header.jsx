import React from 'react';
import styles from '../styles/header.css';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'


function Header () {

    return (
        <div className='header'>
            <h2 className={styles.test}>PhotoTape</h2>
        </div>
    )
}

function RouteHeader () {

    return (
        <div>
            <div className='header'>
                <h2 className={styles.test}>PhotoTape</h2>
                <button>LogIn with Unsplash.com</button>  
            </div>
        </div>
    )
}
export default RouteHeader;