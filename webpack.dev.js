const { merge } = require('webpack-merge')
const common = require('./webpack.config')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  module: {
    rules: [
      // CSS
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', {
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
