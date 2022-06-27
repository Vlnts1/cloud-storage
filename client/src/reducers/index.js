import {combineReducers,applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import userReducer from './userReducer';
import fileReducer from './fileReducer';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootReducer = combineReducers({
    user: userReducer,
    files: fileReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))