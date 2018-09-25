module.exports = {
  entry: './src/js/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  },

  devServer: {
    inline: true,
    port: 3000
  },
  mode: 'development',

  plugins: [
  ]
};