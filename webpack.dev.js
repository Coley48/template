const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: '',
    },
    devServer: {
        open: true,
        port: 8000,
        // contentBase: 'src',
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        }
                    },
                    'postcss-loader',
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            esModule: false,
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
        ]
    },
    optimization: {
        runtimeChunk: 'single'
    }

});