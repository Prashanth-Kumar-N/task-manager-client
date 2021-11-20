import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loggingMiddleWare } from './middleWare/loggingMiddleWare'
import { rootReducer } from './reducer';
import createSagaMiddleware  from 'redux-saga';
import { rootAuthSaga } from './features/authentication/authSlice';

// middleWare when passed to applyMiddleware will give you enchacer
const sagaMiddleWare = createSagaMiddleware();
const middleWares = [loggingMiddleWare, sagaMiddleWare];
const enhancedMiddleWare = applyMiddleware(...middleWares);


const enhancers = [enhancedMiddleWare]
const composedEnhancers = composeWithDevTools(...enhancers);

const store = createStore(rootReducer, composedEnhancers);
export default store

sagaMiddleWare.run(rootAuthSaga);