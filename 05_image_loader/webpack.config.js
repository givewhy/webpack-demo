module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js'
  },
  mode:'development',
  module: {
    rules:[
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
