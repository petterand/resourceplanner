const config = {
   entry: './web/index.js',
   output: {
      path: __dirname,
      filename: 'web/out/bundle.js'
   },
   devtool: 'source-map',
   module: {
      loaders: [{
         test: /\.js$/,
         exclude: /node_modules/,
         loader: 'babel-loader'
      }, {
         test: /\.html$/,
         loader: 'raw-loader'
      }]
   },
   resolve: {
      alias: {
         'vue$': 'vue/dist/vue.esm.js'
      }
   }
};


module.exports = config;