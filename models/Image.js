//scan directory for images and create json file with paths to images
const fs = require('fs');
const dir = './public/images/';
const Images = fs.readdirSync(dir).forEach(file => {
  fs.readFile(path.join(dir, file), (err, data) => {
    if (err) throw err;
    fs.writeFile(path.join(dir, file), data, (err) => {
      if (err) throw err;
    });
  });
});

module.exports = Images;