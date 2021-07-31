export const actions = {
    loggedIn: 'auth/loggedIn',
    signedUp: 'auth/signedUp',
    loggedOff: 'auth/loggedOff'
}

const loggedInSuccess = (actionData) => ({type: actions.loggedIn, payload: actionData});
const signedUpSuccess = (actionData) => ({type: actions.signedUp, payload: actionData});
const loggedOffSuccess = (actionData) => ({type: actions.loggedOff});


export const loggedIn = actionData => {
    return (dispatch) => {
        
    }
}