import React from 'react';
import ReactDOM from 'react-dom';
import './assets/animated.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/elegant-icons/style.css';
import '../node_modules/et-line/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import './assets/style.scss';
import App from './components/app';
import * as serviceWorker from './serviceWorker';
//import amplify
import { AwsProvider } from './core/context/AwsContext';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { BrowserRouter } from 'react-router-dom';
Amplify.configure(awsExports);
ReactDOM.render(
  <AwsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AwsProvider>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
