import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectPhoto } from '../redux/actioncreators';
import styles from '../styles/listphoto.css';
import ListPhotoItem from './listphotoitem.jsx';

function ListPhoto ({listPhoto, selectPhoto}) {

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
            <button className={styles.buttonDownload}>Загрузить больше фотографий</button>
        </div>
       
    )
}

function mapStateToProps (state) {
    return {
        listPhoto: state.listPhoto,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        selectPhoto: bindActionCreators(selectPhoto, dispatch),
    }
}

ListPhoto = connect(
    mapStateToProps,
    mapDispatchToProps,
)(ListPhoto)

export default ListPhoto;