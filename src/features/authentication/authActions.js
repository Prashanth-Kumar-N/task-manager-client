export const actions = {
    logInUser: 'auth/logInUser',
    loggedIn: 'auth/loggedIn',
    signupUser: 'auth/signupUser',
    signedUp: 'auth/signedUp',
    logOffUser: 'auth/logOffUser',
    loggedOff: 'auth/loggedOff',
}

export const logInUser = (actionData) => ({type:actions.logInUser, payload: actionData});
export const loggedInSuccess = (actionData) => ({type: actions.loggedIn, payload: actionData});
export const signupUser = (actionData) => ({type:actions.signupUser, payload: actionData});
export const signedupSuccess = (actionData) => ({type: actions.signedUp, payload: actionData});
export const logoffUser = (actionData) => ({type:actions.logOffUser, payload: actionData});
export const loggedOffSuccess = () => ({type: actions.loggedOff});


export const loggedIn = actionData => {
    return (dispatch) => {
        
    }
}