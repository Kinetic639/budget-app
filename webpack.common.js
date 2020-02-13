const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CSSExtract = new ExtractTextPlugin("/dist/styles.css");

module.exports = {
  // entry: "./src/playground/redux-expensify.js",
  entry: "./src/App.js",
  output: {
    path: path.join(__dirname, "public", "dist"),
    // publicPath: "/dist/S",
    filename: "bundle.js"
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    CSSExtract
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.s?css$/,
        use: CSSExtract.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  }
};
