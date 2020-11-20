import React from 'react';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

import styles from '../styles/authentification.css'

function Authentication () {

    return (
        <div className={styles.container}>
            <button className={styles.button}>back</button>
            <Link to='/'>Back</Link>
        </div>
    )
}

export default Authentication