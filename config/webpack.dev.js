/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const { merge } = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.resolve(__dirname, '/dist'),
        historyApiFallback: true,
        inline: true,
        open: true,
        hot: true,
    },
    devtool: 'inline-source-map',
})
