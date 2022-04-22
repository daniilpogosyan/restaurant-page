const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
    base:'./src/base.js',
  },
  devtool: 'inline-source-map',
  plugins:[
    new HtmlWebpackPlugin({
      title: 'Restaurant page',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /(.png$)|(.jpg$)|(.jpeg$)|(.gif$)|(.svg$)|(.webp$)/i,
        type: 'asset/resource',
      }
    ],
  },
};