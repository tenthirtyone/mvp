const sass = require('./sass');
const minifier = require('./minify');

class Statics {
  constructor() {
    this.sass = new sass();
    this.minifier = new minifier();
  }

  compile() {
    this.sass.render();
    this.minifier.minify();
  }
}

module.exports = Statics;