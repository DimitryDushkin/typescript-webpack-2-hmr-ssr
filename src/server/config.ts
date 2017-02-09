import path from 'path';


export default {
    port: 5000,
    projectRoot: path.resolve(__dirname + '/../../'),
    isDevelopment: process.env.NODE_ENV !== 'production'
};
