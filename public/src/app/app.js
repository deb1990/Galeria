import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, hashHistory } from 'react-router';

//Components
import Gallery from "./components/gallery";

// Store and Redux
import {store} from "./reducer/index";
import {Provider} from "react-redux";
import { syncHistoryWithStore } from 'react-router-redux'

// Constants
const app = document.getElementById("app");
const history = syncHistoryWithStore(hashHistory, store);

//Material UI Theme
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
import getMuiTheme from 'material-ui/styles/getMuiTheme';
const muiTheme = getMuiTheme({});


// Render
ReactDOM.render((
    <MuiThemeProvider muiTheme={muiTheme}>
        <Provider store={store}>
            <Router history={history}>
                <Route path="/" component={Gallery}/>
            </Router>
        </Provider>
    </MuiThemeProvider>
), app);