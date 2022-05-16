import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import App from './App';

const container = document.getElementById('app') as HTMLDivElement;
ReactDOM.hydrateRoot(
    container,
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
