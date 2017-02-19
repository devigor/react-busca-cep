module.exports = {
  entry: [
    './src/App.js',
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: { presets: ['react', 'es2015'] },
      }
    ],
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/public/assets/js/',
  },
  resolve: { extensions: ['', 'jsx', '.js'] }
}
