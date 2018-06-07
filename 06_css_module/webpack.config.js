module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  mode:'development',
  module: {
    rules:[
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
             loader: 'css-loader',
             options: {
               modules: true
             }
          }
        ]
      }
    ]
  }
};
