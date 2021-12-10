
const initialState = {
    RATING: 0
};

function Reducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_RATING': return {
            RATING: action.RATING
        }
        default: return state
    }
}

export default Reducer
