const path = require("path");

module.exports = {
    entry: path.resolve(__dirname, "./src/index.ts"),
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [{
                    loader: "ts-loader",
                    options: { configFile: "bundle.tsconfig.json" },
                }],
                exclude: /node_modules/,
            },
        ],
    },
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",
};
