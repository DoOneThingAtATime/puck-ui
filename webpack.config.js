const path = require('path')

module.exports = {
  entry: {
    puck: './lib/index.tsx'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist/lib'),
    libraryTarget: 'umd',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.s([ac])ss$/,
        use: [
          devMode ? 'style-loader' : {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [path.resolve(__dirname, 'stylesheets', 'include')]
            }
          }
        ]
      }
    ]
  },
}
