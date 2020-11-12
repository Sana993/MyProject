import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

import styles from '../styles/authentification.css'

function Authentification () {

    return (
        // <Router>
            <div className={styles.container}>
                <button className={styles.button}>LogIn with Unsplash.com</button>
                <Link to='/'>Back</Link>
            </div>
        // </Router>
    )
}

export default Authentification