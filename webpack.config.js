module.exports = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/'
  },
  module: {
    // 웹팩 1에서는 loaders를 썼지만 2에선 rules
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        // 쿼리가 필요한 로더는 loader로 써줘야함.
        // 쿼리가 필요 없는 로더는 use로 써도 된다.
        // 웹팩 2에선 babel-loader와 같이 -loader 생략이 불가능해졌다.
        loader: 'babel-loader'
        // babel-loader?머시기와 같은 쿼리나 query: 옵션 대신에
        // 웹팩 2에선 options: 로 바뀜.
        // .babelrc로 따로 빼줘도 상관 없다.
      }
    ]
  }
};