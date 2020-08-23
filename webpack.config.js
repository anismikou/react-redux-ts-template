/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.m?js(x?)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.scss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader',
                    },
                ],
            },
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Proto G9',
            template: 'template.html',
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.d.tsx', '.css', '.scss'],
    },
}

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new OptimizeCSSAssets())
}
