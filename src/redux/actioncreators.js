
function nextPhoto (id) {
    return {
        type: 'NEXT_PHOTO',
        id: id,
    }
}

function previousPhoto (id) {
    return {
        type: 'PREVIOUS_PHOTO',
        id: id,
    }
}

function selectPhoto (id) {
    return {
        type: 'SELECT_PHOTO',
        id: id,
    }
}

function clickStamp () {
    return {
        type: 'CLICK_STAMP',
    }
}

function hoverBack (hover) {
    return {
        type: 'HOVER_BACK',
        hover: hover,
    }
}

function downloadMore (list) {
    return {
        type: 'DOWNLOAD_MORE',
        list: list,
    }
}

function clickLike () {
    return {
        type: 'CLICK_LIKE',
    }
}

function setUnsplash (unsplash) {
    return {
        type: 'SET_UNSPLASH',
        unsplash: unsplash,
    }
}
function setPhoto (photo) {
    return {
        type: 'SET_PHOTO',
        photo: photo,
    }
}

export { nextPhoto, previousPhoto, selectPhoto, clickStamp, hoverBack, downloadMore, clickLike, setUnsplash, setPhoto }