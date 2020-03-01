import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter } from 'react-router-dom';



ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, document.getElementById('root'));

