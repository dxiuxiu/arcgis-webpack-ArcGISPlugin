const ArcGISPlugin = require("@arcgis/webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

const path = require('path')
module.exports = {
  entry: {
    index: "./src/index.ts"
  },

  module: {
    rules: [
      {
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
            publicPath : '/'
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
  resolve: { // 不配置会报错
    // modules: [ // js
    //   path.resolve(__dirname, "/src"),
    //   path.resolve(__dirname, "node_modules/")
    // ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"] // ？
  },
  node: {
    process: false,
    global: false,
    fs: "empty" // 不要会爆粗
  }
}