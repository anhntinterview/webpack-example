import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

// Note: using for yarn start which is not Server Rendering Case
import { isSSR } from './ssr';

declare global {
    interface Window {
        APP_STATE: string;
    }
}

const initialState = window.APP_STATE;

if (isSSR) {
    const container = document.getElementById('app') as HTMLDivElement;
    ReactDOM.hydrateRoot(
        container,
        <BrowserRouter>
            <App initialState={initialState} />
        </BrowserRouter>
    );
} else {
    const portal = document.getElementById('root')!;
    const container = ReactDOM.createRoot(portal);
    container.render(
        <BrowserRouter>
            <App initialState={initialState} />
        </BrowserRouter>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
