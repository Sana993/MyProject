import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { selectPhoto } from '../redux/actioncreators';
import styles from '../styles/listphoto.css';

function ListPhoto ({listPhoto, selectPhoto}) {

    return (
        <ul className={styles.listPhoto}>
            {listPhoto.map((item)=>{
                return(
                    <li 
                        className={styles.listItem}
                        id={item.id}
                    >
                        <div
                            onClick={()=>{selectPhoto(item.id)}}
                        >
                            <img 
                                src={item.urls.small} 
                                alt={item.alt_description}
                                style={{
                                    maxWidth:'100%',
                                    maxHeight: '100%',
                                }}
                            />
                            <div className={styles.author}>
                                <div 
                                    className={styles.authorFace}
                                    style={{
                                        backgroundImage: `url(${item.user.profile_image.small})`,
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}
                                ></div>
                                <div className={styles.authorName}>{`${item.user.first_name} ${item.user.last_name}`}</div>
                            </div>
                        </div>
                    </li>
                )
            })}
        </ul>
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