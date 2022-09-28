import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Test62 from './Test62';
// import Ref from './Ref';
import Test63 from './Test63';
import Validation from './Validation';
import LifeCycle from './LifeCycle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Test62 />
    <Ref />
    <Ref /> */}
    <Test63/>
    <Validation/>
    <LifeCycle/>
  </React.StrictMode>
);