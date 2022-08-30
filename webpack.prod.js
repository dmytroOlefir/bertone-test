const { merge } = require('webpack-merge')
const common = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins:
        [
          new MiniCssExtractPlugin({
            filename: 'main.css'
          })
        ],
  module: {
    rules: [
      // CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', {
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [
                [
                  'postcss-preset-env',
                  'autoprefixer',
                  {
                    // Options
                  }
                ]
              ]
            }
          }
        }, 'sass-loader']
      }
    ]
  }
})
