import 'reflect-metadata';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
// ** for CLIENT RENDERING
import { store } from './core/redux/app/store';
import reportWebVitals from './reportWebVitals';
import coreSliceApiReducer, { coreSliceApi } from './core/redux/slice';

// Note: using for yarn start which is not Server Rendering Case
import { isSSR } from './ssr';

declare global {
    interface Window {
        APP_STATE: string;
        __PRELOADED_STATE__?: any;
    }
}

const initialState = window.APP_STATE;
const preloadedState = window.__PRELOADED_STATE__;

// ** for SERVER RENDERING
const storeFromServer = preloadedState
    ? configureStore({
          reducer: {
              [coreSliceApi.reducerPath]: coreSliceApiReducer,
          },
          middleware: (getDefaultMiddleware: CurriedGetDefaultMiddleware) =>
              getDefaultMiddleware().concat(coreSliceApi.middleware),
          preloadedState,
      })
    : null;
// const storeFromServer = preloadedState
//     ? configureStore(preloadedState)
//     : null;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

if (isSSR) {
    const container = document.getElementById('app') as HTMLDivElement;
    ReactDOM.hydrateRoot(
        container,
        <Provider store={storeFromServer}>
            <BrowserRouter>
                <App initialState={initialState} />
            </BrowserRouter>
        </Provider>
    );
} else {
    const portal = document.getElementById('root')!;
    const container = ReactDOM.createRoot(portal);
    container.render(
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
