import './App.css';
import { Suspense } from 'react';
import React from 'react';
import Door from './components/Door'

const App = () => {
const Header = React.lazy(() => import('./components/Header'));
const Main = React.lazy(() => import('./components/Main'))

let fullfilled = false;
let promise = null;
const useTimeout = (ms) => {
    if (!fullfilled) {
        throw promise || (promise = new Promise((res) => {
            setTimeout(() => {
                fullfilled = true;
                res();
            }, ms);
        }));
    }
};

const Test = () => {
    useTimeout(3000);
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
};

  return (
    <div>
      <Suspense fallback={
        <div className="loading">
          <img src="../images/bb8.gif" alt="loading" />
          <h1>Loading...</h1>
        </div> }>
          <Test />
      </Suspense>
      <Door />
    </div>
  );
}

export default App;
