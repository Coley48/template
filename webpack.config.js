const path = require("path");

let production = false;

module.exports = {
    mode: production ? "production" : "development",

    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        open: true,
        port: 80,
        contentBase: "src",
        hot: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader", "postcss-loader"]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
            },
            {
                test: /\.(png|jpg|svg)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            }
        ]
    }



}