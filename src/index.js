import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter,Fragment, Switch } from "react-router-dom"
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

// import {About} from "./shared/About";
// import {Posts} from "./shared/Posts";
// import {PostsInfo} from "./shared/PostInfo";
// import {Authors} from "./shared/Authors";
// import {Contact} from "./shared/Contact"


ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root'));
registerServiceWorker();

