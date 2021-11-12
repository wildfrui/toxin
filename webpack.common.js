const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackPugPlugin = require("html-webpack-pug-plugin");

module.exports = {
  entry: { main: "./src/index.js", vendor: "./src/vendor.js" },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/template.pug",
      filename: "index.html",
      inject: "body",
    }),
    new HtmlWebpackPugPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: "pug-loader",
      },
      { test: /\.html$/, use: ["html-loader"] },
      {
        test: /\.svg|png|jpg|gif$/,
        use: {
          loader: "file-loader",
          options: { name: "[name].[hash].[ext]", outputPath: "imgs" },
        },
      },
    ],
  },
};
