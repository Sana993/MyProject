import React from 'react';
import {connect} from 'react-redux';
import styles from '../styles/header.css';









function RouteHeader ({unsplash}) {
    // console.log(unsplash);

    const authUrl = unsplash.auth.getAuthenticationUrl(['public', 'write_likes']);

    return (
        <div>
            <div className='header'>
                <h2 className={styles.test}>PhotoTape</h2>
                <button
                    onClick={()=>location.assign(authUrl)}
                >LogIn with Unsplash.com</button>  
            </div>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        unsplash: state.unsplash
    }
}


RouteHeader=connect(
    mapStateToProps
)(RouteHeader)

export default RouteHeader;