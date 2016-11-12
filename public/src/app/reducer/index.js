import {combineReducers} from "redux";
import galleryData from "./gallery-reducer";
import { routerReducer } from 'react-router-redux'
import {createStore} from "redux";

const allReducers = combineReducers({
    galleryData,
    routing: routerReducer
});

const store = createStore(allReducers);

export {allReducers, store};