const isProd = process.env.NODE_ENV === 'production',
    webpack = require('webpack'),
    { CheckerPlugin } = require('awesome-typescript-loader'),
    WEBPACK_DEV_SERVER_PORT = 8080;

const config = {
    entry: ['./src/client/client.tsx'],
    output: {
        filename: 'bundle.js',
        path: '/dist/public',
        publicPath: `http://localhost:${WEBPACK_DEV_SERVER_PORT}/`,
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: isProd ? '' : '#eval',

    // Currently we need to add '.ts' to the resolve.extensions array.
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: ['awesome-typescript-loader'],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [],
    devServer: {
        hot: true,
        compress: true,
        port: WEBPACK_DEV_SERVER_PORT
    }
};

if (!isProd) {
    config.entry.unshift(
        'react-hot-loader/patch'
    );
    config.module.rules[0].loader.unshift('react-hot-loader/webpack');

    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new CheckerPlugin()
    );
} else {
    config.plugins.push(
         new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        })
    );
}

module.exports = config;