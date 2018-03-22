import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch, Fragment, Link } from "react-router-dom";
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import Info from "./app/partials/Info"

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route exact path ="/" component={App} />
            <Route  exact path ="/info/:showIdForFetch" component ={Info} />
        </Switch>
    </HashRouter>
    , document.getElementById('root'));
registerServiceWorker();
