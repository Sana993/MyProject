import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectPhoto, downloadMore } from '../redux/actioncreators';
import styles from '../styles/listphoto.css';
import ListPhotoItem from './listphotoitem.jsx';
import {toJson} from 'unsplash-js'

function ListPhoto ({unsplash, listPhoto, photoNumber, selectPhoto, downloadMore}) {

    function downloadPhoto () {
        unsplash.photos.listPhotos(1, photoNumber+10, "popular")
            .then(toJson)
            .then(json => {
                downloadMore(json)
            })
    }

    return (
        <div>
             <ul className={styles.listPhoto}>
                {listPhoto.map((item)=>{
                    return(
                        <ListPhotoItem 
                            item={item}
                            styles={styles}
                            key={item.id}
                            selectPhoto={selectPhoto}
                        />
                    )
                })}
            </ul>
            <button 
                className={styles.buttonDownload}
                onClick={()=>downloadPhoto()}
            >Загрузить больше фотографий</button>
        </div>
       
    )
}

function mapStateToProps (state) {
    return {
        photoNumber: state.photoNumber,
        unsplash: state.unsplash,
        listPhoto: state.listPhoto,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        selectPhoto: bindActionCreators(selectPhoto, dispatch),
        downloadMore: bindActionCreators(downloadMore, dispatch),
    }
}

ListPhoto = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListPhoto)

export default ListPhoto;