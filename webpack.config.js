const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.tsx`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    historyApiFallback: true,
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
      },
      {
        test: /\.(tsx|ts)?$/,
        loader: `ts-loader`
      }
    ],
  },
  resolve: {
    modules: [`node_modules`, path.resolve(path.join(__dirname, `src/components`))],
    extensions: [`.js`, `.ts`, `.tsx`, `.json`],
    alias: {
      '@components': path.resolve(__dirname, `src/components`),
      '@consts': path.resolve(__dirname, `src/consts/consts`),
      '@utils': path.resolve(__dirname, `src/utils`),
      '@reducer': path.resolve(__dirname, `src/reducer`),
      '@hocs': path.resolve(__dirname, `src/hocs`),
      '@api': path.resolve(__dirname, `src/api`),
      '@root': path.resolve(__dirname, `src`),
    }
  },
  devtool: `source-map`,
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
    }),
  ],
};
