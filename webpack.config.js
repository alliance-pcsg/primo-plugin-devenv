const path    = require('path')
const minify  = require('babel-minify-webpack-plugin')

module.exports = {
  entry: {
    'myPlugin': './src/index.js',
    'myPlugin.min': './src/index.js'
  },
  output: {
    filename: '[name].js',
    libraryTarget: 'umd',
    library: 'myPlugin'
  },
  watch: true,
  module: {
    rules: [
      { test: /\.html$/, use: 'raw-loader' }
    ]
  },
  externals: {
    angular: 'angular'
  },
  plugins: [
    new minify({}, {
      test: /\.min\.js($|\?)/i
    })
  ]
}
