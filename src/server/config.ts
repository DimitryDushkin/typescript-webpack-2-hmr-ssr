import path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production';

export default {
    port: 5000,
    projectRoot: path.resolve(__dirname + '/../../'),
    isDevelopment,
    isSSREnabled: !isDevelopment || process.env.SSR_ENABLED
};
