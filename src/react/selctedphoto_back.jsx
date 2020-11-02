import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { nextPhoto, previousPhoto } from '../redux/actioncreators';
import styles from '../styles/selectedphoto.css';

function SelectedPhotoBack ({photo, size}) {
    return (
        <div 
            className={styles.back}
            style={{
                ...size,
                 right: `${400-Number(size.width.slice(0, -2))/2}px`,
                top: `${450-Number(size.height.slice(0, -2))/2}px`
            }}
         >
            <div className={styles.backTop}>
                <div className={styles.tags}></div>
                <div className={styles.stamp}></div>
             </div>
            <div className={styles.backDown}>
                <div className={styles.location}></div>
                <div className={styles.author}>
                    <div 
                        className={styles.authorFace}
                        style={{
                            backgroundImage: `url(${photo.user.profile_image.small})`,
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
    }
}

function mapDispatchToProps (dispatch) {
    return {
        nextPhoto: bindActionCreators(nextPhoto, dispatch),
        previousPhoto: bindActionCreators(previousPhoto, dispatch),
    }
}

SelectedPhotoBack = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedPhotoBack)

export default SelectedPhotoBack