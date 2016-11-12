import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

//Components
import Login from "./components/login";
import LoggedIn from "./components/loggedIn";

// Store and Redux
import {store} from "./reducer/index";
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux'
// Constants
const app = document.getElementById("app");
const history = syncHistoryWithStore(hashHistory, store);

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500,blueGrey800} from 'material-ui/styles/colors';
const muiTheme = getMuiTheme({
    palette: {
        primary1Color: blueGrey800
    },
    appBar: {
        height: 50
    }
});

import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyDjYsOsWb0GhKbBJ9gF4KVvw0VEYp1HY8o",
    authDomain: "todo-3002a.firebaseapp.com",
    databaseURL: "https://todo-3002a.firebaseio.com",
    storageBucket: "todo-3002a.appspot.com",
    messagingSenderId: "528156843360"
};
firebase.initializeApp(config);


// Render
ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Login}/>
                <Route path="/todo" component={LoggedIn}/>
            </Router>
        </Provider>
    </MuiThemeProvider>
), app);