const path = require("path");

module.exports = {
    devtool: "inline-source-map",
    resolve: { extensions: [".tsx", ".ts", ".js"] },
    module: { rules: [] },
    output: { path: path.resolve(__dirname, "dist") },
    mode: "development",
};
