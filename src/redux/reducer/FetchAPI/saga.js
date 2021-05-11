import axios from 'axios';
import {call, put, takeLatest} from 'redux-saga/effects' 

// Worker Saga

function* fetchUserRequestedData(action){
    console.log('saga worker')

    try{
        const apiConfig={
            method:'get',
            url:'https://jsonplaceholder.typicode.com/albums/1/photos'
        };
        const response=yield call(axios,apiConfig);
        console.log("Response Data:",response.data);
        yield put({type:'FETCH_USER_SUCCESS',payload:response.data})
    }
    catch(e){
        console.log(e);
        yield put({type:'FETCH_USER_FAILURE',payload:e.message})
    }
}



// Watcher Saga
function* fetchApiData(){
    console.log('saga Watcher')
    yield takeLatest('FETCH_USER_REQUEST',fetchUserRequestedData);
}

export default fetchApiData;