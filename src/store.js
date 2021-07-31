import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggingMiddleWare } from './middleWare/loggingMiddleWare'
import { rootReducer } from './reducer';

// middleWare when passed to applyMiddleware will give you enchacer
const middleWares = [loggingMiddleWare];
const enhancedMiddleWare = applyMiddleware(...middleWares);


const enhancers = [enhancedMiddleWare]
const composedEnhancers = composeWithDevTools(...enhancers);

export default createStore(rootReducer, composedEnhancers);