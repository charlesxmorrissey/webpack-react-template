'use strict'

const config = require('./config.js')
const webpack = require('webpack')
const webpackConfig = require('./webpack.config.base')
const webpackMerge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

const webpackProdConfig = webpackMerge(webpackConfig, {
  mode: 'production',
  devtool: config.appProdSourceMap ? 'source-map' : false,

  output: {
    chunkFilename: 'js/[name].[chunkhash:8].js',
    filename: 'js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              sourceMap: config.appProdSourceMap,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: config.appProdSourceMap,
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: config.appProdSourceMap,
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessorPluginOptions: {
          preset: [
            'advanced',
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },

  plugins: [
    // Makes some environment variables available to our JS code, for example:
    // if (process.env.NODE_ENV === 'production') { ... }.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),

    // Removes the `dist` directory before compilation.
    new CleanWebpackPlugin([config.appBuild], {
      root: config.appBase,
    }),

    // Extracts CSS styles into it's own CSS bundle.
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),

    new HtmlWebpackPlugin({
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        minifyCSS: true,
        minifyJS: true,
        minifyURLs: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeScriptTypeAttributes: true,
      },
      template: config.appHtml,
      title: config.appTitle,
    }),
  ],
})

module.exports = webpackProdConfig
