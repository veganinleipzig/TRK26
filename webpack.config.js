const path = require('path');
const outputDir = process.env.ELEVENTY_OUTPUT_DIR || 'output/site';

module.exports = {
  entry: './src/scripts/index.js',
  output: {
    path: path.resolve(__dirname, outputDir, 'scripts'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
