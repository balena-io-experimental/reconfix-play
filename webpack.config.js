'use strict'
const fs = require('fs')
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
const gitRevisionPlugin = new GitRevisionPlugin()
const InterpolateHtmlPlugin = require('interpolate-html-plugin')
const appDirectory = fs.realpathSync(process.cwd())
const resolveApp = relativePath => path.resolve(appDirectory, relativePath)

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        options: { presets: ['@babel/env'] }
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, 'dist/'),
    devtoolModuleFilenameTemplate: info => '/' + info.resourcePath
  },
  plugins: [
    gitRevisionPlugin,
    new HtmlWebpackPlugin({
      inject: true,
      template: resolveApp('public/index.html')
    }),
    new webpack.DefinePlugin({
      'VERSION': JSON.stringify(gitRevisionPlugin.version()),
      'BRANCH': JSON.stringify(gitRevisionPlugin.branch())
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, process.env)
  ]
}
