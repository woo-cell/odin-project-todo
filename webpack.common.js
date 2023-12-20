const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename:"main.js",
        path: path.resolve(__dirname,"dist"),
    },  
    // resolve: {
    //     alias: {
    //       'date-fns': 'date-fns/esm',
    //     },
    // },
    // module: {
    //     rules: [
    //       {
    //         test: /\.js$/,
    //         exclude: /node_modules/,
    //         use: {
    //           loader: 'babel-loader',
    //         },
    //       },
    //     ],
    //   },
};