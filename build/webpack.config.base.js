'use strict'

const eslintFormatter = require('eslint-formatter-pretty')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config')

const webpackConfig = {
  ...config.appStats,

  entry: {
    app: config.appIndexJs,
  },

  output: {
    chunkFilename: '[name].chunk.js',
    filename: '[name].js',
    path: config.appBuild,
  },

  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      src: config.appSrc,
    },
    modules: ['node_modules'],
  },

  module: {
    rules: [
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
    new ESLintPlugin({
      context: config.appSrc,
      emitWarning: true,
      formatter: eslintFormatter,
    }),

    new HtmlWebpackPlugin({
      description: config.appTemplateMeta.description,
      template: config.appTemplateMeta.template,
      title: config.appTemplateMeta.title,
    }),
  ],
}

module.exports = webpackConfig
