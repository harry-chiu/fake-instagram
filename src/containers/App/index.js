import React from 'react';
import { Router } from '@reach/router';
import Home from 'containers/Home';
import Login from 'containers/Login';
import GlobalStyle from 'components/GlobalStyle';
import { MobileView } from './style';

const App = () => (
  <MobileView>
    <GlobalStyle />
    <Router basepath="/">
      <Home path="/" />
      <Login path="login" />
    </Router>
  </MobileView>
);

export default App;
