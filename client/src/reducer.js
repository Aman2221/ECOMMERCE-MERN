export const initialState = {
    user : null,
    valid : false,
    basket : []
}

export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER' : 
            return {
                ...state,
                user : action.user
            }
        case 'SET_VALID' : 
            return {
                ...state,
                valid : true
            }
        case 'ADD_ITEM' : 
            return {
                ...state,
                basket : [...state.basket ,action.item]
            }
        default : 
            return state
    }
}