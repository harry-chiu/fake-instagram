import React, { useState, useEffect } from 'react';
import { Location, Router } from '@reach/router';
import firebase from 'firebase/app';
import size from 'lodash/size';
import Home from 'containers/Home';
import Login from 'containers/Login';
import TabBar from 'components/TabBar';
import StoryBar from 'components/StoryBar';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import PostContext from 'context/PostContext';
import NetworkContext from 'context/NetworkContext';
import showAlert from 'utils/showAlert';
import syncPost from 'utils/syncPost';
import { MobileView, SafeArea } from './style';
import 'firebase/database';

const App = () => {
  const [network, setNetwork] = useState(true);
  const [postList, setPostList] = useState([]);
  const [triggerUpdate, setTriggerUpdate] = useState(false);

  const handleOnline = async () => {
    await syncPost();
    setNetwork(true);
  };

  const handleOffline = () => {
    showAlert();
    setNetwork(false);
  };

  const updatePosts = () => setTriggerUpdate(prev => !prev);

  useEffect(() => {
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!network) return;

    const setPostListFromFirebase = snapshot => {
      const postListFromFirebase = snapshot.val();
      if (!postListFromFirebase || !size(postListFromFirebase)) return;

      setPostList(postListFromFirebase);
    };

    firebase
      .database()
      .ref('/posts')
      .once('value', setPostListFromFirebase)
      .catch(console.log);
  }, [network, triggerUpdate]);

  return (
    <NetworkContext.Provider value={network}>
      <PostContext.Provider value={{ postList, updatePosts }}>
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
      </PostContext.Provider>
    </NetworkContext.Provider>
  );
};

export default App;
