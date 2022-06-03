import {applyMiddleware, combineReducers, createStore} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunkMiddleware from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import userReducer from "./User";
import typeAccReducer from "./TypeAccount";
import AppReducer from "./AppInitialized";
import Levels from './Levels';
import AccountEvents from './AccountEvents';

let reducer = combineReducers({
    form: formReducer,
    user: userReducer,
    typesAccount: typeAccReducer,
    app:AppReducer,
    lvls:Levels,
    AccountEvents:AccountEvents
})

let store = createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))
export default store