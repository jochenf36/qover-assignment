import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './App.module.css';
import SignIn from './pages/SignIn/SignIn';
import Car from './pages/Car/Car';
import Quote from './pages/Quote/Quote';
import Footer from './components/Footer/Footer';

const PATH_ROOT = '/';
export const PATH_CAR = '/car';
export const PATH_QUOTE = '/quote';

function App() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrap}>
        <Switch>
          <Route exact path={PATH_ROOT}>
            <SignIn />
          </Route>
          <Route path={PATH_CAR}>
            <Car />
          </Route>
          <Route path={PATH_QUOTE}>
            <Quote />
          </Route>
        </Switch>
      </div>
      <footer className={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
