const path = require('path')
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'themes/public/')
  },
  module: {
    rules: [

      // JS
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },

      // Images
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: '../images/[hash][ext]'
        }
      },

      // Fonts
      {
        test: /\.(ttf|eot|otf|woff|woff2)$/,
        type: 'asset/resource',
        generator: {
          filename: '../fonts/[hash][ext]'
        }
      },

      // SVG 
      {
        test: /\.svg$/,
        include: path.resolve(__dirname, 'src/icons'),
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              extract: true,
              outputPath: '/',
              spriteFilename: 'sprite.svg.php'
            }
          },
          'svgo-loader'
        ],
      }
    ]
  },
  plugins: [
    new SpriteLoaderPlugin({
      plainSprite: true,
    })
  ]
}
