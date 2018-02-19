import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import path from 'path'
import App from './../src/app/app';

const app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const appStr = ReactDOMServer.renderToString(<App />);
    res.render('index', { title: 'React FrontCampper', appStr: appStr })
});

app.listen(8000, ()=> {
    console.log('server started')
});
