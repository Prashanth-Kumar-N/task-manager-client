import { actions } from './authActions';

const initialState = {isSignedIn: false};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.loggedIn: 
            return {...state, isSignedIn: true, user: action.payload};

        case actions.signedUp:
            return {...state, isSignedIn: true, user:action.payload};
        
        case actions.loggedOff:
            return initialState;
        
        default:
            return state;

    }
}