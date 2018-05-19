'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const eslintFormatter = require('eslint-formatter-pretty')
const config = require('./config.js')

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
        test: /\.(js|jsx)$/,
        loader: 'eslint-loader',
        include: config.appSrc,
        enforce: 'pre',
        options: {
          formatter: eslintFormatter,
          eslintPath: require.resolve('eslint'),
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
      inject: true,
      template: config.appHtml,
      title: config.appTitle,
    }),
  ],
}

module.exports = webpackConfig
