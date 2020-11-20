import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectPhoto, downloadMore } from '../redux/actioncreators';
import styles from '../styles/listphoto.css';
import ListPhotoItem from './listphotoitem.jsx';
import Unsplash, {toJson} from 'unsplash-js'

function ListPhoto ({listPhoto, pageNumber, selectPhoto, downloadMore}) {

    function downloadPhoto () {
        const unsplash = new Unsplash({accessKey: 'W5oq3JGZopEHoTqc5GPgMrCK4egVDFSn7nV5xhuWIzk'});
            unsplash.photos.listPhotos(pageNumber+2, 10, "latest")
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
        listPhoto: state.listPhoto,
        pageNumber: state.pageNumber,
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