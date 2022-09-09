const { merge } = require('webpack-merge')
const common = require('./webpack.config')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  devServer: {
    open: true,
    hot: false,
    liveReload: true,
  },
  module: {
    rules: [
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
                ]
              ]
            }
          }
        }, 'sass-loader']
      }
    ]
  },
  plugins: [
    new BrowserSyncPlugin(
      {
        host: 'localhost',
        proxy: 'http://localhost:8000',
        injectChanges: false,
        injectCss: true,
        reloadDelay: 1000,
        files: [
          './themes/**/*.php',
          './themes/**/*.twig',
          './themes/public/*.css',
          './themes/public/*.js',
        ],
      },
    ),
  ]
})
