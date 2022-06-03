/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

// import React from 'react';
//  import {AppRegistry} from 'react-native';
//  import App from './App';
//  import {name as appName} from './app.json';
//  import { Provider } from 'react-redux';
// //  import store from './redux/store';
//  import configureStore from './redux/store';
 
// //  const store = configureStore();
 
//  const ReduxMovies= () =>
//    <Provider store={configureStore}>
//      <App />
//    </Provider>
 
//  AppRegistry.registerComponent(appName, () => ReduxMovies);