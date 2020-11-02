import React from 'react';
import styles from'../styles/app.css';

import Header from './header.jsx'
import SelectedPhoto from './selectedphoto.jsx';
import ListPhoto from './listphoto.jsx';



function App () {
    return(
        <div className={styles.app}>
            <Header />
            <SelectedPhoto />
            <ListPhoto />
        </div>
    )
}

export default App