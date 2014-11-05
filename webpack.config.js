var path = require("path");

module.exports = {
  entry: "./src/main.js",

  output: {
    path: path.resolve(__dirname, "lib"),
    filename: "main.js"
  },

  outputLibrary: "merkle",

  outputLibraryTarget: "commonjs",

  externals: {
    crypto: "crypto"
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "esnext-loader"
      }
    ]
  }
}
