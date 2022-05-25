import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./User";
import typeAccReducer from "./TypeAccount";

let reducer=combineReducers({
    form:formReducer,
    userReducer,
    typeAccReducer
})

let store = createStore(reducer,composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store