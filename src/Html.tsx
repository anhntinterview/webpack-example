import React from 'react';

const Html = ({ content, state, scripts }) => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>{state}</title>
            </head>
            <body>
                <div id="app" dangerouslySetInnerHTML={{ __html: content }} />
                {scripts.map((script, index) => (
                    <script key={index} src={`static/${script}`} />
                ))}
            </body>
        </html>
    );
};

export default Html;
