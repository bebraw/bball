var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
  entry: path.resolve(ROOT_PATH, 'app/main'),
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      css: path.resolve(ROOT_PATH, 'css')
    }
  },
  output: {
    path: path.resolve(ROOT_PATH, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        //include: path.resolve(ROOT_PATH, 'css')
      }
    
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
    title: 'Custom template', 
    template: 'index.html', // Load a custom template 
    inject: 'body' // Inject all scripts into the body 
  })
  ]
};

if(TARGET === 'dev') {
  module.exports = merge(common, {
    devtool: 'eval',
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel?stage=1'],
          include: path.resolve(ROOT_PATH, 'app')
        }
      ]
    }
  });
}