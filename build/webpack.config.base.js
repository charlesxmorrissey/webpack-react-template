'use strict'

const config = require('./config.js')
const eslintFormatter = require('eslint-formatter-pretty')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpackConfig = {
  entry: {
    app: config.appIndexJs,
  },

  output: {
    path: config.appBuild,
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': config.appSrc,
    },
    modules: ['node_modules'],
  },

  stats: {
    children: false,
    chunkModules: false,
    chunks: false,
    colors: true,
    modules: false,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'eslint-loader',
        include: config.appSrc,
        enforce: 'pre',
        options: {
          formatter: eslintFormatter,
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: config.appSrc,
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: config.appHtml,
      title: config.appTitle,
    }),
  ],
}

module.exports = webpackConfig
