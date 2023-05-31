const initialState = {
    registered : false,
    loggedIn : false,
    token: null,
    error: null,
};

const mainReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                token: action.payload,
                error:null,
            };
            case 'SIGNUP SUCCESSFULLY':
            return {
                ...state,
                registered: true,
                token: action.payload,
                error: null,
            }
                default:
                    return state;
    }
};


export default mainReducer;
