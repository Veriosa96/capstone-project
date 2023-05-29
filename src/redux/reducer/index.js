const initialState = {
    loggedIn : false,
    token: null,
    error: null,
};

const loginReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                token: action.payload,
                error:null,
            };
                default:
                    return state;
    }
};

export default loginReducer;