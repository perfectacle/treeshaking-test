module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle-mine.js',
    path: __dirname + '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          plugins: [
            ['transform-imports', {
              'react-router': {
                transform: 'react-router/es/${member}',
                preventFullImport: true
              }
            }]
          ]
        }
      }
    ]
  }
};

process.noDeprecation = true;