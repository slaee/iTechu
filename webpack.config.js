const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackInjector = require("html-webpack-injector");

module.exports = {
    mode: "development",
    entry: {
        main: path.join(__dirname, "./src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "www"),
        pathinfo: false,
        filename: "./js/build/[name].dev.js",
        chunkFilename: "./js/build/[name].dev.js",
    },
    module: {
        rules: [
            {
                test: /\.hbs$/,
                use: ["raw-loader"],
            },
            {
                test: /\.m?js$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: [
                            "@babel/plugin-syntax-dynamic-import",
                            "@babel/plugin-proposal-class-properties",
                            "@babel/plugin-proposal-private-property-in-object",
                            "@babel/plugin-proposal-private-methods"
                        ]
                    },
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: "../",
                        },
                    },
                    "css-loader?url=false",
                    "postcss-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(woff|ttf|eot|svg|png|jpeg|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[ext]",
                        outputPath: "res",
                    },
                },
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./css/build/[name].dev.css",
            chunkFilename: "./css/build/[name].dev.css",
        }),
        new HtmlWebpackPlugin({
            inject: "head",
            custom: `<link rel="stylesheet" href="./css/build/mainpage.dev.css"><link rel="stylesheet" href="./css/build/splashscreen.dev.css"><link rel="stylesheet" href="./res/icons/style.css"><script src="cordova.js"></script><script type="text/javascript" src="js/Launcher.js"></script>`,
            template: "./src/index.html",
            chunks: "all",
            chunksConfig: {
                defer: ["main"],
            },
        }),
        new HtmlWebpackInjector(),
    ],
    optimization: {
        chunkIds: "natural",
        runtimeChunk: true,
    },
};
 