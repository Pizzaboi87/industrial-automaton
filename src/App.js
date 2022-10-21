import './App.css';
import { Suspense } from 'react';
import React from 'react';

const Door = React.lazy(() => import('./components/Door'));
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
    useTimeout(2000);
    return (
      <div className="App">
        <Door />
        <Header />
        <Main />
      </div>
    );
};



const App = () => {
  return (
    <div>
      <Suspense fallback={
        <div className="loading">
          <img src="../images/bb8.gif" alt="loading" />
          <h1>Loading...</h1>
        </div> }>
          <Test />
      </Suspense>
    </div>
  );
}

export default App;
