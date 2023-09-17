import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import Catalog from './pages/catalog/Catalog';
import Home from './pages/Home/Home.js';
import SensorDetails from './pages/SensorDetails/SensorDetails';

export default (
    <Route path="/" component={App}>
        <Route path="home" component={Home}/>
        <Route path="catalog" component={Catalog}/>
        <Route path="sensorDetails/:sensorId" component={SensorDetails}/>
    </Route>
)