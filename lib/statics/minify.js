const compressor = require('node-minify');

class Minify {
  constructor() {

  }
  minify() {
    compressor.minify({
      compressor: 'babel-minify',
      input: `${process.cwd()}/assets/**/*.js`,
      output: `${process.cwd()}/public/scripts.js`,
      callback: function (err, min) { }
    });
  }
}

module.exports = Minify;