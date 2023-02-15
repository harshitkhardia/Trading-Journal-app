const path = require('path');
const webpack = require('webpack');
/*const MiniCssExtractPlugin = require("mini-css-extract-plugin");
new MiniCssExtractPlugin({
      filename: "./static/css/main.css",
      chunkFilename: "main.css"
    })
*/
module.exports = {
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        // This has effect on the react lib size
        NODE_ENV: JSON.stringify("development"),
      },
    }),
  ],
  mode:'development',
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './static/frontend'),
    clean : true
    },
    module: {
      rules: [
        {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env']
          }
        }
        },
        {
          test: /\.css$/,
          include: path.resolve(__dirname, 'static'),
          use: ['style-loader', { loader: 'css-loader', options: { importLoaders: 1 }},"postcss-loader"],
        },
     ]
    },
    optimization: {
    minimize: true,
  },
  devtool: 'inline-source-map',

};
