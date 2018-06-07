const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode: 'development',
  
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
