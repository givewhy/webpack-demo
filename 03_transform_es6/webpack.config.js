const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    es6: './src/es6.js'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use:{
          loader: "babel-loader"
        }
      }
    ]
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: { 
          cache:false
         }
      })
    ]
  }
};
