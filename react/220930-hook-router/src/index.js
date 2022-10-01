import React from 'react';
import ReactDOM from 'react-dom/client';
import Hook from './1HooksEffect';
import Reducer from "./2HooksReducer";
import Memo from "./3HooksMemo";
import Callback from "./4HooksCallback";
import Ref from './5HookRef';
import Origin from './6Origin';
import UseSass from './7UseSass';
import CSSModule from './8CSSModule';
import StyledComponents from './9StyledComponent';
// import Test65 from './Test65';
import Test66 from './Test66';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hook />
    <hr/>
    <Reducer />
    <hr/>
    <Memo/>
    <hr/>
    <Callback/>
    <hr/>
    <Ref/>
    <hr/>
    <Origin/>
    <hr/>
    <UseSass/>
    <hr/>
    <CSSModule/>
    <hr/>
    <StyledComponents/>
    <hr/>
    {/* <Test65/> */}
    {/* <hr/> */}
    <Test66/>
  </React.StrictMode>
);