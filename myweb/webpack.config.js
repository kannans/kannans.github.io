var webpack = require('webpack')

module.exports = {
  entry: '/myweb/index.js',

  output: {
    filename: 'bundle.js',
    publicPath: '/myweb'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
    ]
  }
}
