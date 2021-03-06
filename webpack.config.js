const path = require('path');
const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              modules: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              modules: true
            }
          }
        ]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options:{
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        options:{
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]

}
