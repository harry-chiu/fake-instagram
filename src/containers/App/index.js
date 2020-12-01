import React from 'react';
import { Location, Router } from '@reach/router';
import Home from 'containers/Home';
import Login from 'containers/Login';
import TabBar from 'components/TabBar';
import StoryBar from 'components/StoryBar';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import { MobileView, SafeArea } from './style';

const navigationBarHeight = 44;
const storyBarHeight = 74;
const tabBarHeight = 44;
const deviceHeight = window.outerHeight;
const safeAreaHeight =
  deviceHeight - navigationBarHeight - storyBarHeight - tabBarHeight;

const App = () => (
  <Location>
    {({ location }) => (
      <MobileView>
        <GlobalStyle />
        <NavigationBar />
        <StoryBar />
        <SafeArea height={safeAreaHeight}>
          <Router basepath={BASEPATH} location={location}>
            <Home path="/" />
            <Login path="login" />
          </Router>
        </SafeArea>
        <TabBar />
      </MobileView>
    )}
  </Location>
);

export default App;
