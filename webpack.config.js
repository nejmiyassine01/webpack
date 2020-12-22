const path = require("path")
const ExamplePlugin = require("./ExamplePlugin");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "build")
    },
    module: {
        rules: [
            // {
            //     test: /\.js$/,
            //     use: "babel-loader"
            // },
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: "style-loader"
            //         },
            //         {
            //             loader: "css-loader"
            //         }
            //     ]
            // },
            // {
            //     test: /\.jpeg$/,
            //     use: [
            //         {
            //             loader: "url-loader", 
            //             options: {
            //                 limit: 10000
            //             }
            //         }
            //     ]
            // },
            {
                test: /\.jpe?g$/,
                use: ["file-loader"]
            },
        ]
    },
    plugins: [
        new ExamplePlugin()
    ]
}
