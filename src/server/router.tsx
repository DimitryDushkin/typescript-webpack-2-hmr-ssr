import path from 'path';
import { Router } from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../client/blocks/app/app';
import layout from './layout';

const router = Router();

router.get('*', (req, res) => {
    res.send(layout(ReactDOMServer.renderToString(<App />)));
});

export default router;