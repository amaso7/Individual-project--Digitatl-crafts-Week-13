
const initialState = {
    pts: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'PTS_LOADED': 
            return {
                ...state, 
                pts: action.payload
            }
        default: 
            return state 
    }
}

export default reducer