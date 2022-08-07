const path = require("path");

module.exports = {
    mode: "development",
    entry: path.resolve(__dirname, "../src/index.ts"),
    output: { path: path.resolve(__dirname, "../dist"), filename: "bundle.js" },
    devtool: "inline-source-map",
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [{
                loader: "ts-loader",
                options: { configFile: "config/bundle.tsconfig.json" },
            }],
            exclude: /node_modules/,
        }],
    },
};
