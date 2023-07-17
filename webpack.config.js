const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    context: path.resolve('src'),
    entry: {
        app: ['./scripts', './index.js'],
        vendors: ['angular', 'angular-route'],
    },
    target: 'web',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: 'babel-loader',
            },
            {
                test: /\.html$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: ['html-loader'],
            },
            {
                test: /\.css$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                exclude: [path.resolve(__dirname, 'node_modules')],
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                // Exposes jQuery for use outside Webpack build
                test: require.resolve('jquery'),
                use: [
                    {
                        loader: 'expose-loader',
                        options: {
                            exposes: {
                                globalName: 'jQuery',
                                override: true,
                            },
                        },
                    },
                    {
                        loader: 'expose-loader',
                        options: {
                            exposes: {
                                globalName: '$',
                                override: true,
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        // Provides jQuery for other JS bundled with Webpack
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    output: {
        path: path.resolve(__dirname, './src/dist'),
        filename: '[name].bundle.js',
    },
    devtool: 'eval-cheap-source-map',
    devServer: {
        static: path.join('src'),
        liveReload: true,
    },
};
