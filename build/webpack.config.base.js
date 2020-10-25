'use strict'

const eslintFormatter = require('eslint-formatter-pretty')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

const config = require('./config.js')

const webpackConfig = {
  ...config.appStats,

  output: {
    chunkFilename: '[name].chunk.js',
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
