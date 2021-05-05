const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
// const webpack = require("webpack");

module.exports = {
  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin(),
      //   new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    ],
    resolve: {
      alias: {
        moment: "moment/src/moment",
      },
    },
  },
};
