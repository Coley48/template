const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: {
        main: "./src/main.js",
    },
    output: {
        publicPath: "",
    },
    devtool: "inline-source-map",
    resolve: {
        extensions: [".js", ".vue"],
        alias: {
            "@": "/src",
        },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: "babel-loader",
            },
            {
                test: /\.css$/i,
                use: ["vue-style-loader", "css-loader"],
            },
            {
                test: /\.less$/i,
                use: ["vue-style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "template document",
            template: "./src/assets/index.html",
        }),
        new VueLoaderPlugin(),
    ],
    optimization: {
        runtimeChunk: "single",
    },
    devServer: {
        compress: true,
        port: 8000,
        open: true,
        hot: true,
    },
};
