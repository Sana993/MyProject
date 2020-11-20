import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { clickStamp, hoverBack } from '../redux/actioncreators';
import styles from '../styles/selectedphoto.css';

function SelectedPhotoBack ({showBack, photo, size, clickStamp, hoverBack}) {
    let zPos = (showBack.hover || showBack.click)? 15: 5;
    return (
        <div 
            className={styles.back}
            style={{
                ...size,
                right: `${450-Number(size.width.slice(0, -2))/2}px`,
                top: `${430-Number(size.height.slice(0, -2))/2}px`,
                zIndex: `${zPos}`,
            }}
            onMouseEnter={()=>{hoverBack(true)}}
            onMouseLeave={()=>{hoverBack(false)}}
         >
            <div className={styles.backTop}>
                <div className={styles.tags}></div>
                <div 
                    className={styles.stamp}
                    onClick={()=>{clickStamp()}}
                ></div>
             </div>
            <div className={styles.backDown}>
                <div className={styles.location}></div>
                <div className={styles.author}>
                    <div 
                        className={styles.authorFace}
                        style={{
                            backgroundImage: `url(${photo.user.profile_image.medium})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                        }}
                    ></div>
                    <div className={styles.authorName}>{`${photo.user.first_name} ${photo.user.last_name}`}</div>
                </div>
            </div>
            </div>
    )
}

function mapStateToProps (state) {
    return {
        photo: state.selectedPhoto,
        showBack: state.showBackCard, 
    }
}

function mapDispatchToProps (dispatch) {
    return {
        clickStamp: bindActionCreators(clickStamp, dispatch),
        hoverBack: bindActionCreators(hoverBack, dispatch)
    }
}

SelectedPhotoBack = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedPhotoBack)

export default SelectedPhotoBack