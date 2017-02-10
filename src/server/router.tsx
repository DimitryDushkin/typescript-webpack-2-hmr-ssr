import path from 'path';
import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import config from './config';
import App from '../client/blocks/app/app';
import layout from './layout';

const router = Router();

router.get('*', (req, res) => {
    if (config.isSSREnabled){
        res.send();
    } else {
        res.send(layout(ReactDOMServer.renderToString(<App />)));
    }
});

export default router;