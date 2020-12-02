import React, { lazy, useState, useEffect, Suspense } from 'react';
import { Location, Router } from '@reach/router';
import firebase from 'firebase/app';
import size from 'lodash/size';
import TabBar from 'components/TabBar';
import StoryBar from 'components/StoryBar';
import GlobalStyle from 'components/GlobalStyle';
import NavigationBar from 'components/NavigationBar';
import PostContext from 'context/PostContext';
import NetworkContext from 'context/NetworkContext';
import showModal from 'utils/showModal';
import showAlert from 'utils/showAlert';
import syncPost from 'utils/syncPost';
import { MobileView, SafeArea } from './style';
import 'firebase/database';

const Home = lazy(() => import('containers/Home'));
const Login = lazy(() => import('containers/Login'));

const App = () => {
  const [network, setNetwork] = useState(window.navigator.onLine);
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

  useEffect(() => {
    const installPWA = event => {
      event.preventDefault();

      setTimeout(() => {
        showModal({ onConfirm: () => event.prompt() });
      }, 3000);
    };

    window.addEventListener('beforeinstallprompt', installPWA);

    return () => {
      window.removeEventListener('beforeinstallprompt', installPWA);
    };
  }, []);

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
                <Suspense fallback={null}>
                  <Router basepath={BASEPATH} location={location}>
                    <Home path="/" />
                    <Login path="login" />
                  </Router>
                </Suspense>
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
