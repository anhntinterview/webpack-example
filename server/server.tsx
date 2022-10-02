import 'reflect-metadata';
import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';
import { Provider } from 'react-redux';

import Html from './Html';
import App from '../src/App';
import { store } from '../src/core/redux/app/store';

const PORT = process.env.PORT || 3006;
const app = express();

app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('*', (req, res) => {
    const scripts = ['bundle.js'];
    // *** Without REDUX
    const initialState = 'Rendered on the server side!';
    // const content = ReactDOMServer.renderToString(
    //     <StaticRouter location={req.url}>
    //         <App initialState={initialState} />
    //     </StaticRouter>
    // );
    // *** With REDUX
    // Create a new Redux store instance
    const preloadedState = store.getState();

    const content = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <App
                    initialState={initialState}
                    // preloadedState={preloadedState}
                />
            </StaticRouter>
        </Provider>
    );

    // *** Without REDUX
    // const html = ReactDOMServer.renderToStaticMarkup(
    //     <Html content={content} state={initialState} scripts={scripts} />
    // );
    // *** With REDUX
    const html = ReactDOMServer.renderToStaticMarkup(
        <Html
            content={content}
            state={initialState}
            scripts={scripts}
            preloadedState={preloadedState}
        />
    );

    return res.send(`<!DOCTYPE html>${html}`);
});

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
