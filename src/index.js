import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {HashRouter} from 'react-router-dom';
import './index.css';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import './components/pages/styles/home.css';
import './components/pages/styles/about.css';
import './components/pages/styles/projects.css';
import './components/layout/styles/topnavbar.css';

ReactDOM.render((
        <HashRouter basename={process.env.PUBLIC_URL}>
            <App />
        </HashRouter>
    ), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
