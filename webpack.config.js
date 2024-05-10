const path = require('path');

module.exports = {
  
  mode: 'development', 
  entry: './assets/js/server.js', 
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
        'tls': path.resolve(__dirname, './tls.js')
      },
    
    fallback: {
        "crypto": require.resolve("crypto-browserify"),
        "vm": require.resolve("vm-browserify"),
        "fs": false,
        "http": require.resolve("stream-http"),
        path: require.resolve('path-browserify'),
        "net": false, 
        "querystring": require.resolve("querystring-es3"),
        "stream": require.resolve("stream-browserify"),
        "timers": require.resolve("timers-browserify"),
        "zlib": require.resolve("browserify-zlib"),
        assert: require.resolve('assert/'),
        process: require.resolve('process/browser'),
        "async_hooks": require.resolve("async_hooks")
      
    },
  },
};




