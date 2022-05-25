import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

declare global {
    interface Window {
        APP_STATE: string;
    }
}

const initialState = window.APP_STATE;
const container = document.getElementById('app') as HTMLDivElement;
ReactDOM.hydrateRoot(
    container,
    <BrowserRouter>
        <App initialState={initialState} />
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
