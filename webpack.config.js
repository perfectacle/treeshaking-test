module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};