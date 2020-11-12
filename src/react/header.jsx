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
        // <Router>
            <div>
                <div className='header'>
                    <h2 className={styles.test}>PhotoTape</h2>
                    <Link to='/auth'>Authentification</Link>
                </div>
            </div>
        // </Router>
    )
}
export default RouteHeader;