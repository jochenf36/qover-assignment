import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Login from './pages/Login/Login.lazy';
import Configurator from './pages/Configurator/Configurator.lazy';
import PlanOverview from './pages/PlanOverview/PlanOverview.lazy';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/configurator">
          <Configurator />
        </Route>
        <Route path="/planOverview">
          <PlanOverview />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
