import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import SignIn from './pages/SignIn/SignIn.lazy';
import Car from './pages/Car/Car.lazy';
import Quote from './pages/Quote/Quote.lazy';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <SignIn />
        </Route>
        <Route path="/car">
          <Car />
        </Route>
        <Route path="/quote">
          <Quote />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
