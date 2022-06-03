import { createStore } from "redux";
import {rootReducer} from "./rootReducer";

// const rootReducer = combineReducers({rootReducer});

export const Store = createStore(rootReducer)
// export const Store = createStore(rootReducer,applyMiddleware(thunk));

// export const ABC = "XYx"
// **********************


// import {createStore, applyMiddleware, compose} from 'redux';
// import thunk from 'redux-thunk';
// import { persistStore, persistReducer} from 'redux-persist';
// // import storage from 'redux-persist/lib/storage'
// import {rootReducer} from './rootReducer';
// import AsyncStorage from '@react-native-community/async-storage';

// let middleWare = [thunk];

// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// }

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const persistStoreReducer = persistReducer(persistConfig, rootReducer)

// export const configStore = createStore(persistStoreReducer
//     ,applyMiddleware(...middleWare));

// export let persistor = persistStore(configStore);


//*****************************************************

// import { configureStore } from '@reduxjs/toolkit';
// import { createStore, combineReducers } from 'redux';
// import movieReducer from './movieReducer';


// const rootReducer = combineReducers({
//   movieReducer: movieReducer
// })

// export const configureStore = () => createStore(rootReducer);


// *************************
// const store = configureStore({ reducer: movieReducer })

// export default configureStore;

//********************************************
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import movieReducer from './movieReducer';
 
// const rootReducer = combineReducers({
//   movieReducer: movieReducer
// })


// export const store = createStore(rootReducer,applyMiddleware(thunk));
//***********************************************


// import React from 'react';
//  import {AppRegistry} from 'react-native';
//  import App from './App';
//  import {name as appName} from './app.json';
//  import { Provider } from 'react-redux';
//  import configureStore from './redux/store';
 
//  const store = configureStore();
 
//  const ReduxMovies= () =>
//    <Provider store={store}>
//      <App />
//    </Provider>
 
//  AppRegistry.registerComponent(appName, () => ReduxMovies);