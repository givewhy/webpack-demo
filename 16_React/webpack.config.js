const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
module.exports = {
  entry: {
    es6: './src/es6.js',
    jsx: './src/react.jsx'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use:{
          loader: "babel-loader",
          options: {
            presets: ['es2015', 'react']
          }
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
