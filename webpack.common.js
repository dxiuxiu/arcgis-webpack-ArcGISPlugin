const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path')
module.exports = {
  entry: {
    index: "./src/index.tsx"
  },

  module: {
    rules: [{
        test: /\.ts|tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|webp)$/,
        use: [{
          loader: "url-loader",
          options: {
            limit: 10 * 1024,
            name: 'static/images/[hash:6].[ext]',
            fallback: 'file-loader'
          }
        }]
      },
      {
        test: /\.(wsv|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
        use: [{
          loader: "file-loader",
          options: {
            name: 'static/media/[name].[hash:7].[ext]',
            publicPath: '/'
          }
        }]
      }
    ]
  },

  plugins: [
    new ArcGISPlugin({
      useDefaultAssetLoaders: false,
    }),
    new HtmlWebPackPlugin({
      chunksSortMode: "none",
      template: './index.html',
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"] // ？
  },
  // node: {
  //   process: false,
  //   global: false,
  //   fs: "empty" // 不要会爆粗
  // }
  externals: [
    (context, request, callback) => {
      if (/pe-wasm$/.test(request)) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  node: {
    process: false,
    global: false
  }
}