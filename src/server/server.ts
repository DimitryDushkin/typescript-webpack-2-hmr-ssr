import express from 'express';

import config from './config';
import router from './router';

const app = express();

app.use(express.static(config.projectRoot + '/dist/public'));
app.use(router);

app.listen(config.port, () => {
    console.log('App at http://localhost:' + config.port);
});