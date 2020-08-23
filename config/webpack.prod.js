/* eslint-disable @typescript-eslint/no-var-requires */
const { merge } = require('webpack-merge')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin')
const common = require('./webpack.common')

module.exports = merge(common, {
    mode: 'production',
    plugins: [new CleanWebpackPlugin(), new OptimizeCSSAssets()],
})
