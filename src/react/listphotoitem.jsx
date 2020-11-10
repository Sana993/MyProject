import React from 'react';



function ListPhotoItem ({item, styles, selectPhoto}) {

    return (
        <li 
            className={styles.listItem}
            id={item.id}
        >
            <div 
                className={styles.photo}
                onClick={()=>selectPhoto(item.id)}
                style={{
                    backgroundImage: `url(${item.urls.small})`,
                    backgroundSize: 'contain',
                    backgroundPositionX: 'center',
                    backgroundPositionY: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
            </div>
            <div className={styles.author}>
                <div
                    className={styles.authorFace}
                    style={{
                        backgroundImage: `url(${item.user.profile_image.small})`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                    }}
                ></div>
                <div
                    className={styles.authorName}
                >{`${item.user.first_name} ${item.user.last_name}`}</div>
            </div>
        </li>
    )
}

export default ListPhotoItem