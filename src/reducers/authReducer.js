import * as types from '../constants/actionTypes';

//initial state
const authState = {
    loginClicked: false,
    otherState: null
}


const authReducer = (state=authState, action) => {
    switch (action.type){

        case types.LOGIN_TOGGLE:
            const toggled = {
                ...state,
                loginClicked: !state.loginClicked
            };


            return toggled;
        

    
        default: 
            return state;
    }

    
}


export default authReducer;