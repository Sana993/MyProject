import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import styles from'../styles/app.css';

import Header from './header.jsx'
import SelectedPhoto from './selectedphoto.jsx';
import ListPhoto from './listphoto.jsx';
import Authentication from './authetication.jsx';



function Home () {
    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <div className={styles.app}>
                        <Header />
                        <SelectedPhoto />
                        <ListPhoto />
                    </div>
                </Route>
                <Route path='/auth'>
                    <Authentication />
                </Route>
            </Switch>
        </Router>
    )
}



function App () {
    return(
        <div className={styles.app}>
            <Header />
            <SelectedPhoto />
            <ListPhoto />
        </div>
    )
}

export default Home