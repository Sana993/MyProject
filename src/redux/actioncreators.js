
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

export { nextPhoto, previousPhoto, selectPhoto }