import React from 'react';

const Html = ({ content, state, scripts, preloadedState }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href="build/public/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <link rel="apple-touch-icon" href="build/public/logo192.png" />
                <link rel="manifest" href="build/public/manifest.json" />
                <title>{state}</title>
                {scripts.map((script, index) => (
                    <script
                        defer
                        key={index}
                        src={`build/static/js/${script}`}
                    />
                ))}
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.APP_STATE=${JSON.stringify(state)}`,
                    }}
                />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__PRELOADED_STATE__=${JSON.stringify(
                            preloadedState
                        ).replace(/</g, '\\u003c')}`,
                    }}
                />
            </body>
        </html>
    );
};

export default Html;
