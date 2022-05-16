import React from 'react';
import { Routes, Route, Outlet, Link } from 'react-router-dom';

import Second from './pages/Second';
import About from './pages/About';
import First from './pages/First';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="first" element={<First />} />
                <Route path="second" element={<Second />} />
                <Route element={<NotFound />} />
            </Route>
        </Routes>
    );
};

function Layout() {
    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/first">First</Link>
                    </li>
                    <li>
                        <Link to="/second">Second</Link>
                    </li>
                </ul>
            </nav>

            <hr />

            {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
            <Outlet />
        </div>
    );
}

export default App;