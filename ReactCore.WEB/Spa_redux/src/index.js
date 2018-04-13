import React                 from 'react';
import ReactDOM              from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider }          from "react-redux";
import { store }             from "./App-redux";
import { List }              from "./App";
import { Form }              from "./App-redux2";


export const App = () => (
  <div>
    <div><List/></div>
    <div><Form/></div>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();
