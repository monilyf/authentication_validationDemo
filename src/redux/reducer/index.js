import {combineReducers} from 'redux';
import FetchApiReducer from './FetchAPI/reducer'

const rootReducer = combineReducers({
    fetchApiReducer:FetchApiReducer,
})

export default rootReducer;