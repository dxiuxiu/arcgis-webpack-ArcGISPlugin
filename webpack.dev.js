const webpack = require('webpack')
const merge = require('webpack-merge')
const commomConfig = require('./webpack.common.js')
const devConfig = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    module: {
        rules: [{
                test: /\.scss$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules : true 
                        }
                    }, 'sass-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2,
                            // modules : true 
                        }
                    }, 'less-loader'
                ]
            },
            {
                test: /\.css$/,
                use: ['style-loader',
                    {
                        loader: 'css-loader',
                    }
                ]
            }
        ]
    },
    devServer: {
        contentBase: './dist',
        open: true,
        hot: true, // 让 devServer 开启 HMR 功能
        hotOnly: false, // true 即使 HMR 功能未生效浏览器也不自动刷新
        useLocalIp: true,
        host : '0.0.0.0',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    output: {
        filename: 'static/js/[name].js', // 这里占位符 [name] 就是 entry 配置的 key 值
        chunkFilename: 'static/js/[name].chunk.js',
    },
}

module.exports = merge(commomConfig, devConfig)