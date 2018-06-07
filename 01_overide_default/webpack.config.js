const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: 'bundle.js'
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