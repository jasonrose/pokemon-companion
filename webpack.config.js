/**
 * @format
 * @noflow
 */

const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  devServer: {
    overlay: true,
    watchOptions: {
      poll: true
    }
  },
  entry: {
    app: "./src/index.js"
  },
  output: {
    chunkFilename: "[contenthash].js",
    filename: "[name]_[contenthash].js"
  },
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({})
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          name: true,
          chunks: "initial",
          minChunks: 2
        },
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true
        },
        default: false,
        vendors: false
      },
      name: false
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: "babel-loader" }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader", // translates CSS into CommonJS
            options: { url: false }
          }
        ]
      },
      {
        test: /stats\.data$/,
        use: [
          { loader: "babel-loader" },
          { loader: path.resolve("src/custom_plugins/stats_loader.js") }
        ]
      },
      {
        test: /airports\.data$/,
        use: [
          { loader: "babel-loader" },
          { loader: path.resolve("src/custom_plugins/airports_loader.js") }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin("dist", {}),
    new HtmlWebPackPlugin({
      template: "src/index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "[contenthash].css",
      chunkFilename: "[hash].css"
    })
  ]
};
