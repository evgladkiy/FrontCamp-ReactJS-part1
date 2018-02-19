import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './../src/app/app';
import template from './templates/template';

const app = express();


app.use(express.static('public'));

app.get('/', (req, res) => {
    const appStr = ReactDOMServer.renderToString(<App />);
    res.send(template({
        body: appStr,
        title: 'FrontCampper React App',
    }));
});

app.listen(8000, ()=> {
    console.log('server started')
});
