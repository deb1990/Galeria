import {combineReducers} from "redux";
import user from "./userReducer";
import todoData from "./todoReducer";
import { routerReducer } from 'react-router-redux'
import {createStore} from "redux";

const allReducers = combineReducers({
    user,
    todoData,
    routing: routerReducer
});

const store = createStore(allReducers);

export {allReducers, store};