'use strict'

const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const webpackConfig = require('./webpack.config.base')
const config = require('./config')

const webpackDevConfig = webpackMerge(webpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',

  devServer: {
    ...config.appStats,
    clientLogLevel: 'error',
    contentBase: config.appBuild,
    compress: true,
    hot: true,
    overlay: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: config.appNodeModules,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                exportLocalsConvention: 'camelCase',
                localIdentContext: config.appSrc,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
              sourceMap: config.appDevSourceMap,
            },
          },
        ],
      },
    ],
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'development') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),

    // Necessary to emit hot updates (CSS only).
    new webpack.HotModuleReplacementPlugin(),
  ],
})

module.exports = webpackDevConfig
