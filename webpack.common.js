const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    base: './src/react/base/index.js',
    auth: './src/react/auth/index.js',
    cuiWindow: './src/react/cuiWindow/index.js',
    leftSidebar: './src/react/leftSidebar/index.js',
    rightSidebar: './src/react/rightSidebar/index.js',
    topBar: './src/react/topBar/index.js',
    organigram: './src/react/organigram/index.js',
  },
  devtool: 'inline-source-map',
  target: 'electron-renderer',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [[
              '@babel/preset-env', {
                targets: {
                  esmodules: true
                }
              }],
              '@babel/preset-react']
          }
        }
      },
      {
        test: [/\.s[ac]ss$/i, /\.css$/i],
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
        ],
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'base',
      template: './src/react/base/index.html',
      filename: 'base.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'auth',
      template: './src/react/auth/index.html',
      filename: 'auth.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'cuiWindow',
      template: './src/react/cuiWindow/index.html',
      filename: 'cuiWindow.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'leftSidebar',
      template: './src/react/leftSidebar/index.html',
      filename: 'leftSidebar.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'rightSidebar',
      template: './src/react/rightSidebar/index.html',
      filename: 'rightSidebar.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'topBar',
      template: './src/react/topBar/index.html',
      filename: 'topBar.html',
      inject: false
    }),
    new HtmlWebpackPlugin({
      title: 'organigram',
      template: './src/react/organigram/index.html',
      filename: 'organigram.html',
      inject: false
    })
  ]
};

