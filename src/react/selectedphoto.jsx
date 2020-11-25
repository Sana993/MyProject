import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { nextPhoto, previousPhoto } from '../redux/actioncreators';
import styles from '../styles/selectedphoto.css';
import SelectedPhotoBack from './selctedphoto_back.jsx';

let SelectedPhoto = function ({numPhoto, listPhoto, nextPhoto, previousPhoto, }) {
    // console.log(listPhoto[numPhoto]);
    let photo = listPhoto[numPhoto]
    let size;
    if (photo.height/photo.width > (5/7)) {
        size = {
            width: `${photo.width*(500/photo.height)}px`,
            height: '500px',
        } 
    } else {
        size = {
            width: '700px',
            height: `${photo.height*(700/photo.width)}px`,
        }
    }

    return (
        <div className={styles.container}>
            <div 
                className={styles.left}
                onClick={()=>{previousPhoto(photo.id)}}
            >

            </div>
            <div 
                className={styles.face}
                style={{
                    backgroundImage: `url(${photo.urls.regular})`,
                    ...size,
                }}
            >    
            </div>
            <div 
                className={styles.right}
                onClick={()=>{nextPhoto(photo.id)}}
            >

            </div>
            <SelectedPhotoBack size={size}/>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        numPhoto: state.selectedPhoto,
        listPhoto: state.listPhoto
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