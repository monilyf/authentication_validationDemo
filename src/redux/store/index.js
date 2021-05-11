import {applyMiddleware, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducer/index'
import rootSaga from '../saga/index'

// Creating the saga Middleware
const sagaMiddleware = createSagaMiddleware()

// configure store
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
)
console.log('store----',store)

// run the saga
sagaMiddleware.run(rootSaga)

export default store;