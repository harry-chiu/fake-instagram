import React from 'react';
import { render } from 'react-dom';
import firebase from 'firebase/app';
import App from './containers/App';
import 'regenerator-runtime';

// 註冊 Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(FIREBASE_CONFIG);
}

const element = <App />;
const container = document.getElementById('root');

render(element, container);

// 註冊 PWA

let someshit = null;
window.addEventListener('beforeinstallprompt', event => {
  alert('Hello');
  event.preventDefault();

  someshit = event;
  console.log(someshit);

  return false;
});

// 註冊 Service Worker
if (ENV === 'production' && 'serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}
