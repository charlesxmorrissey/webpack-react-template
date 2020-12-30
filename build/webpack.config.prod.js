'use strict'

const webpack = require('webpack')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { merge } = require('webpack-merge')

const webpackConfig = require('./webpack.config.base')
const config = require('./config')

const webpackProdConfig = merge(webpackConfig, {
  mode: 'production',
  devtool: config.appProdSourceMap ? 'source-map' : false,

  output: {
    chunkFilename: 'js/[name].[chunkhash:8].js',
    filename: 'js/[name].[chunkhash:8].js',
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                auto: true,
                exportLocalsConvention: 'camelCase',
                localIdentContext: config.appSrc,
                localIdentName: '[hash:base64]',
              },
              sourceMap: config.appProdSourceMap,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },

  optimization: {
    moduleIds: 'hashed',
    minimizer: [
      new TerserPlugin({
        sourceMap: config.appProdSourceMap,
        test: /\.js(\?.*)?$/i,
        terserOptions: {
          output: {
            comments: false,
          },
        },
        extractComments: false,
      }),

      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            'default',
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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [config.appBuild],
      verbose: true,
    }),

    // Extracts CSS styles into it's own CSS bundle.
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css',
    }),
  ],
})

module.exports = webpackProdConfig
