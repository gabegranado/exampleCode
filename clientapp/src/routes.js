import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import Home from './pages/Home/Home.js';

export default (
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
    </Route>
)