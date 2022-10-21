import './App.css';
import { Suspense } from 'react';
import React from 'react';

const Door = React.lazy(() => import('./components/Door'));
const Header = React.lazy(() => import('./components/Header'));
const Main = React.lazy(() => import('./components/Main'))

const App = () => {
  return (
    <div>
      <Suspense fallback={
        <div className="loading">
          <img src="../images/bb8.gif" alt="loading" />
          <h1>Loading...</h1>
        </div>}>
        <div className='App'>
          <Door />
          <Header />
          <Main />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
