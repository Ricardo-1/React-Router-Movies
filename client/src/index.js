import React from 'react';
import ReactDOM from 'react-dom';

//ASK ABOUT HOW TO KNOW WHEN TO IMPORT BROWSERROUTER
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';

ReactDOM.render(
<Router>
    <App />
</Router>, 
document.getElementById('root')
);
