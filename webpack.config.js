const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    list: './src/app/controller/list.ts',
    create: './src/app/controller/create.ts'
  },
  devtool: 'inline-source-map',
  optimization: {
    minimize: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist/lib')
  },
  plugins: [
    new CopyPlugin([{
      from: 'src/*.html',
      to: '../[name].[ext]',
      toType: 'template'
    }])
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000,
    writeToDisk: true,
  }
}
