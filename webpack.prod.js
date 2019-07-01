const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


const commomConfig = require('./webpack.common.js')
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-eval-source-map',
    module: {
        rules: [{
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    }, 'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                        }
                    }, 'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style/[name].[contenthash].css', // '[name].[hash].css',
            chunkFilename: 'style/[id].[contenthash].css' //  '[id].[hash].css',
        })
    ],
    output: {
        filename: 'static/js/[name].[contenthash].js', // 这里占位符 [name] 就是 entry 配置的 key 值
        chunkFilename: 'static/js/[name].[contenthash].js',
    },
}

module.exports = merge(commomConfig, prodConfig)