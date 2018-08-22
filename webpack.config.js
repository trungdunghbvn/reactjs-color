
var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var config = {
  resolve: {
    extensions: [ '.js', '.jsx']
  },
  entry: APP_DIR + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'build.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV':JSON.stringify('production')
      }
    })
  ]
};

module.exports = config;