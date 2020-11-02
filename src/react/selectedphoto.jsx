import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { nextPhoto, previousPhoto } from '../redux/actioncreators';
import styles from '../styles/selectedphoto.css';

let SelectedPhoto = function ({photo, nextPhoto, previousPhoto}) {
    let size;
    if (photo.height/photo.width > (5/7)) {
        size = {
            width: `${photo.width*(500/photo.height)}px`,
            height: '500px',
        } 
    } else {
        size = {
            width: '700px',
            height: `${photo.height*(500/photo.width)}px`,
        }
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.left}></div>
            <div 
                className={styles.face}
                style={{
                    backgroundImage: `url(${photo.urls.raw})`,
                    ...size,
                }}
            >    
            </div>
            <div className={styles.right}></div>
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
                        >

                        </div>
                        <div className={styles.authorName}>{`${photo.user.first_name} ${photo.user.last_name}`}</div>
                    </div>
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

SelectedPhoto = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedPhoto)

export default SelectedPhoto;