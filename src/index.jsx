import React from 'react';
import { hydrate } from 'react-dom';
import App from './app/app';

import './styles/styles.less';

hydrate(
    <App/>,
    document.getElementById('root')
);
