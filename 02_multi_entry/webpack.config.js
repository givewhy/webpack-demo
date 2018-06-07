const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    bundle1: './main1.js',
    bundle2: './main2.js'
  },
  mode: 'development',
  output: {
    filename: '[name].js'
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
