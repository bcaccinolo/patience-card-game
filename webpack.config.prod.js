const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

var path = require('path')
var webpack = require('webpack'
//
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'patience.js',
    path: path.resolve(__dirname, 'public/js/')
    // publicPath : '/public/js'
  },
  plugins: [
    new UglifyJSPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // emitFile: false,
              outputPath: 'public/images/',
              useRelativePath: true // process.env.NODE_ENV === "production"
            }
          }
        ]
      }
    ]
  }
};
