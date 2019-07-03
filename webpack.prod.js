const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');


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
    // optimization: {
    //     splitChunks: {
    //         chunks: 'all',
    //         minSize: 30000, // 模块大于30k会被抽离到公共模块
    //         minChunks: 1, // 模块出现1次就会被抽离到公共模块
    //         maxAsyncRequests: 5, // 异步模块，一次最多只能被加载5个
    //         maxInitialRequests: 3, // 入口模块最多只能加载3个
    //         name: true,
    //         cacheGroups: {
    //             default: {
    //                 minChunks: 2,
    //                 priority: -20,
    //                 reuseExistingChunk: true,
    //                 name: 'default'
    //             },
    //             vendors: {
    //                 test: /[\\/]node_modules[\\/]/,
    //                 priority: -10,
    //                 name: 'vendors'
    //             }
    //         }
    //     },
    //     runtimeChunk: {
    //         name: 'runtime'
    //     }
    // },


    optimization: {
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            // automaticNameMaxLength: 30,
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
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