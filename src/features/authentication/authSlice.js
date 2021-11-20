import { actions, loggedInSuccess, loggedOffSuccess, logInUser, logoffUser, signedupSuccess } from './authActions';
import { takeEvery, put, call, take, all} from 'redux-saga/effects';
import { checkUserAndLogin, logout, signup } from '../api-calls';

const initialState = {isSignedIn: false};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case actions.loggedIn: 
            return {...state, isSignedIn: true, user: action.payload};

        case actions.signedUp:
            console.log(action.payload);
            return {...state, isSignedIn: true, user:action.payload};
        
        case actions.loggedOff:
            return initialState;
        
        default:
            return state;

    }
}

function* loginFlow(action) {
    // First listen for log in action
    const loginEffect = yield take(actions.logInUser);
    yield loginUser(loginEffect);

    // Then listen for logout action
    const logoutEffect = yield take(actions.logOffUser);
    yield logoutUser(logoutEffect);
}


function* loginUser (data) {
    const loginEffectRes = yield checkUserAndLogin(data.payload);
    yield put(loggedInSuccess(loginEffectRes));
}


function* logoutUser (data) {
    const logoutEffectRes = yield logout(data.payload);
    yield put(loggedOffSuccess(logoutEffectRes));
}


function* signupUser () {
    const signupEffect = yield take(actions.signupUser);
    const signupEffectRes = yield signup(signupEffect.payload);
    yield put(signedupSuccess(signupEffectRes));
}


export function* rootAuthSaga() {
    yield all([loginFlow(), signupUser()]);
}
