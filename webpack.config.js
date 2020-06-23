const path = require(`path`);
const webpack = require(`webpack`);

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1350,
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
    modules: [`node_modules`, path.resolve(path.join(__dirname, `src/components`))],
    extensions: [`.js`, `.jsx`, `.ts`, `.tsx`, `.webm`],
    alias: {
      '@components': path.resolve(__dirname, `src/components/`),
      '@consts': path.resolve(__dirname, `src/consts/consts`),
      '@utils': path.resolve(__dirname, `src/utils/utils`),
    }
  },
  devtool: `source-map`,
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
      PropTypes: `prop-types`,
    }),
  ],
};
