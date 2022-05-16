import path from 'path';
import fs from 'fs';

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import express from 'express';

import Html from './Html';
import App from './App';

const PORT = process.env.PORT || 3006;
const app = express();

app.get('*', (req, res) => {
    const scripts = ['runtime.js', 'vendor.js', 'app.js'];
    const initialState = 'rendered on the server side!';

    const content = ReactDOMServer.renderToString(
        <StaticRouter location={req.url}>
            <App initialState={initialState} />
        </StaticRouter>
    );

    const html = ReactDOMServer.renderToStaticMarkup(
        <Html content={content} state={initialState} scripts={scripts} />
    );

    return res.send(`<!DOCTYPE html>${html}`);
});

app.use(express.static('public'));

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});