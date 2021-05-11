// A rootSaga aggregates multiple sagas to a single entry point for the sagaMiddleware to run.                                     

import {all,call} from 'redux-saga/effects' 
import fetchApiData from '../reducer/FetchAPI/saga'

export default function* rootSaga(){
    console.log('rootSaga')
    yield all([call(fetchApiData)])
} 


// Here, all effect is used with array of generators and our sagas or generators 
// will be executed in parallel. 