const path = require('path');
const PrettierPlugin = require('prettier-webpack-plugin');

module.exports = {
  entry: {
    bundle: './src/app.ts'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
	},
	optimization: {
		splitChunks: {
			name: 'vendor',
			chunks: 'initial',
		}
	},
  resolve: {
    extensions: ['.ts', '.js']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader'
      }
    ]
	},
	plugins: [
		new PrettierPlugin()
	]
}
