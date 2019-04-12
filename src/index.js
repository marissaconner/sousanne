import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Homepage from './App/pages/Homepage.js';

import './index.css';
import App from './App.js';

render((
    <BrowserRouter>
        <App/>
    </BrowserRouter>
), document.getElementById('root'));