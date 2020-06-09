const path = require(`path`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1337,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      }
    ],
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, `src/components`),
      '@app': path.resolve(__dirname, `src/components/app`),
      '@main': path.resolve(__dirname, `src/components/main`),
      '@consts': path.resolve(__dirname, `src/consts`)
    }
  },
  devtool: `source-map`,
};
