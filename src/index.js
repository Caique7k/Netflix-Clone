import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize-css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './Home.js';
import Login from './components/LoginPage/Login.js';
import { GlobalStyles } from './global-styles';

ReactDOM.render(
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/lists" component={App} />
        <Route path="/auth/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </BrowserRouter>
    ,
  </>,
  document.getElementById('root')
);
