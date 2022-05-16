import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

const HomePage = React.lazy(() => import('./pages/Home'));
const FirstPage = React.lazy(() => import('./pages/First'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/first" element={<FirstPage />} />
            <Route element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
