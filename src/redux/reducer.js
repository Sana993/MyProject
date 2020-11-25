
function reducer (state, action) {
    switch (action.type) {

        case 'NEXT_PHOTO':
            let num1
            for (let index in state.listPhoto) {
                if (action.id === state.listPhoto[index].id) {
                    num1 = Number(index)
                }
            }
            if (num1 === (state.listPhoto.length-1)){
                return state
            } else {
                return {
                    ...state,
                    selectedPhoto: num1+1,
                }
            }
        case 'CLICK_STAMP':
            return {
                ...state,
                showBackCard: {
                    hover: state.showBackCard.hover,
                    click:  !state.showBackCard.click,
                },
            }

        case 'HOVER_BACK':
            return {
                ...state,
                showBackCard: {
                    hover: action.hover,
                    click:  state.showBackCard.click,
                },
            }

        case 'PREVIOUS_PHOTO':
            let num2
            for (let index in state.listPhoto) {
                if (action.id === state.listPhoto[index].id) {
                    num2 = Number(index)
                }
            }
            if (num2 === 0){
                return state
            } else {
                return {
                    ...state,
                    selectedPhoto: num2-1,
                }
            }

        case 'SELECT_PHOTO':
            let num3
            for (let index in state.listPhoto) {
                if (action.id === state.listPhoto[index].id) {
                    num3 = Number(index)
                }
            }
            return {
                 ...state,
                 selectedPhoto: num3,
            }

        case 'DOWNLOAD_MORE':
            return {
                ...state,
                listPhoto: action.list,
                photoNumber: state.photoNumber+10,
            }
            
        case 'SET_UNSPLASH':
            return {
                ...state,
                unsplash: action.unsplash
            }

        case 'CLICK_LIKE':
            return {
                ...state,
            }

        case 'SET_PHOTO':
            let list = state.listPhoto.map((item, index)=>{
                if (index==state.selectedPhoto) {
                    console.log(`совпал ${index}`);
                    let newItem = item;
                    newItem.liked_by_user = action.photo.liked_by_user;
                    return newItem
                } else {
                    return item
                }
            })
            console.log(state.listPhoto);
            console.log(list);
            return {
                ...state,
                listPhoto: list
            }

        default: return state;
    }
}

export default reducer;