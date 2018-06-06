const sass = require('node-sass');
const fs = require('fs');

class Sass {
  constructor() {

  }

  render() {
    sass.render({
      file: `${process.cwd()}/assets/styles/styles.scss`,
    }, async (err, result) => {
      const css = result.css.toString('utf8');
      fs.writeFile("./public/styles/style.css", css, (err) => {
        if(err) {
          return console.log(err);
        }
      });
    });

    sass.render({
      file: `${process.cwd()}/assets/styles/admin/styles.scss`,
    }, async (err, result) => {
      const css = result.css.toString('utf8');
      fs.writeFile("./public/admin/styles.css", css, (err) => {
        if(err) {
          return console.log(err);
        }
      });
    });
  }
}

module.exports = Sass;