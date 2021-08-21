import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase/app'
import { Provider } from 'react-redux';
import store from './store';



const firebaseConfig = {
  apiKey: "AIzaSyDtxqJh8fJdbcaOUgYQVDyNJnV3cAZiflw",
  authDomain: "web-messenger-93047.firebaseapp.com",
  projectId: "web-messenger-93047",
  storageBucket: "web-messenger-93047.appspot.com",
  messagingSenderId: "512717482209",
  appId: "1:512717482209:web:dfe7be275c6831d6afafa0",
  measurementId: "G-L8D2NCYL92"
};


firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
