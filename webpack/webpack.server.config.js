const isProd = process.env.NODE_ENV === 'production',
    webpack = require('webpack'),
    nodeExternals = require('webpack-node-externals');

const config = {
    target: 'node',
    externals: [nodeExternals()],
    node: {
        __dirname: true
    },
    entry: './src/server/server.ts',
    output: {
        filename: 'server.bundle.js',
        path: './dist'
    },

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/
            }
        ]
    },
    plugins: []
};

module.exports = config;