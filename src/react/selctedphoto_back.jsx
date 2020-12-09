import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toJson} from 'unsplash-js'

import {clickStamp, hoverBack, setPhoto} from '../redux/actioncreators';
import styles from '../styles/selectedphoto.css';

function SelectedPhotoBack ({unsplash, numPhoto, listPhoto, showBack, size, clickStamp, hoverBack, setPhoto}) {
    let photo = listPhoto[numPhoto]
    // console.log(photo);
    let zPos = (showBack.hover || showBack.click)? 15: 5;
    let likeColor = (photo.liked_by_user)? 'red': 'white';
    // console.log(photo.liked_by_user);
    
    function clickLike (id) {
        if (photo.liked_by_user) {
            console.log(id);
            unsplash.photos.unlikePhoto(id)
                .then(toJson)
                .then(json => {
                    console.log(json);
                    console.log(json.photo);
                    setPhoto(json.photo)
                })
        } else {
            unsplash.photos.likePhoto(id)
                .then(toJson)
                .then(json => {
                    console.log(json.photo);
                    setPhoto(json.photo)
                })
        }
       
    };

    return (
        <div 
            className={styles.back}
            style={{
                ...size,
                right: `${450-Number(size.width.slice(0, -2))/2}px`,
                top: `${430-Number(size.height.slice(0, -2))/2}px`,
                zIndex: `${zPos}`,
            }}
         >
            <div className={styles.backTop}>
                <div className={styles.tags}></div>
                <div 
                    className={styles.stamp}
                    onClick={()=>{clickStamp()}}
                    onMouseEnter={()=>{hoverBack(true)}}
                    onMouseLeave={()=>{hoverBack(false)}}
                ></div>
             </div>
            <div className={styles.backDown}>
                <div className={styles.location}></div>
                <div className={styles.authorAndLikes}>
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
                    <div 
                        className={styles.likes}
                        onClick={()=>{clickLike(photo.id)}}
                        style= {{
                            backgroundColor: `${likeColor}`
                        }}
                    >
                        {photo.likes}
                    </div>
                </div>
            </div>
            </div>
    )
}

function mapStateToProps (state) {
    return {
        unsplash: state.unsplash,
        numPhoto: state.selectedPhoto,
        listPhoto: state.listPhoto,
        showBack: state.showBackCard, 
    }
}

function mapDispatchToProps (dispatch) {
    return {
        setPhoto: bindActionCreators(setPhoto, dispatch),
        clickStamp: bindActionCreators(clickStamp, dispatch),
        hoverBack: bindActionCreators(hoverBack, dispatch)
    }
}

SelectedPhotoBack = connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedPhotoBack)

export default SelectedPhotoBack