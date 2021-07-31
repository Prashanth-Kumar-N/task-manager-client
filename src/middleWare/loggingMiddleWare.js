export const loggingMiddleWare = store => next => action => {
    console.log(action.type);
    next(action)
}