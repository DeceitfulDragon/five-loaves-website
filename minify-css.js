const fs = require('fs');
const path = require('path');
const postcss = require('postcss');
const cssnano = require('cssnano');

const srcDir = path.join(__dirname, 'assets', 'css');
const destDir = path.join(__dirname, 'assets', 'css');

fs.readdir(srcDir, (err, files) => {
  if (err) throw err;

  files.forEach(file => {
    if (path.extname(file) === '.css' && !file.endsWith('.min.css')) {
      const filePath = path.join(srcDir, file);
      const destPath = path.join(destDir, file.replace('.css', '.min.css'));

      fs.readFile(filePath, (err, css) => {
        if (err) throw err;

        postcss([cssnano])
          .process(css, { from: filePath, to: destPath })
          .then(result => {
            fs.writeFile(destPath, result.css, () => true);
            if (result.map) {
              fs.writeFile(destPath + '.map', result.map.toString(), () => true);
            }
          });
      });
    }
  });
});