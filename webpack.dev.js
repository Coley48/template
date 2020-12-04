const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
                test: /\.vue$/,
                loader: "vue-loader"
            },
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
                ]
                // use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    optimization: {
        runtimeChunk: 'single'
    }

});