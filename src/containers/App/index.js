import React, { useState, useEffect } from 'react';
import { Location, Router } from '@reach/router';
import Home from 'containers/Home';
import Login from 'containers/Login';
import TabBar from 'components/TabBar';
import StoryBar from 'components/StoryBar';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import NetworkContext from 'context/NetworkContext';
import syncPostToFirebase from 'utils/syncPostToFirebase';
import { MobileView, SafeArea } from './style';

const App = () => {
  const [network, setNetwork] = useState(true);

  const handleOnline = async () => {
    await syncPostToFirebase();
    setNetwork(true);
  };

  const handleOffline = () => {
    setNetwork(false);
  };

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <NetworkContext.Provider value={network}>
      <Location>
        {({ location }) => (
          <MobileView>
            <GlobalStyle />
            <NavigationBar />
            <StoryBar />
            <SafeArea>
              <Router basepath={BASEPATH} location={location}>
                <Home path="/" />
                <Login path="login" />
              </Router>
            </SafeArea>
            <TabBar />
          </MobileView>
        )}
      </Location>
    </NetworkContext.Provider>
  );
};

export default App;
