import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './style.css';
import App from './App';

declare global {
    interface Window {
        APP_STATE: string;
    }
}

// Lấy state từ một biến global được đưa vào HTML do server tạo
const initialState = window.APP_STATE;
const container = document.getElementById('app') as HTMLDivElement;
ReactDOM.hydrateRoot(
    container,
    <BrowserRouter>
        <App initialState={initialState} />
    </BrowserRouter>
);
