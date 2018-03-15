const path = require('path');

module.exports = {
  entry: __dirname + "/app/main.js", // string | object | array
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, "dist"), // string
    filename: "bundle.js", // string
  },
  module: {
    // configuration regarding modules
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
              loader: 'babel-loader',
              options: {
                  presets: ["es2015", 'react']
              }
          }
      }
    ],
    loaders: [
        {
          test: /\.js?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: ['es2015', 'react']
          }
        }
    ]
  },
  watch: true
}