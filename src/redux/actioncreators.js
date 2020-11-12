
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

function downloadMore () {
    return {
        type: 'DOWNLOAD_MORE'
    }
}
export { nextPhoto, previousPhoto, selectPhoto, clickStamp, hoverBack, downloadMore }