const fs = require('fs');
const path = require('path');
const notDist = require('./notdist.json').map(file =>
  path.resolve(__dirname, file)
);

const recursivelyRemove = function (folderPath) {
  const files = fs.readdirSync(folderPath);
  files.forEach(file => {
    const filePath = path.resolve(folderPath, file);
    if (notDist.includes(filePath)) return;
    if (fs.statSync(filePath).isFile()) {
      console.log(`Deleting ${filePath}.`);
      //   fs.unlinkSync(filePath);
      console.log(`Successfully deleted ${file}.`);
    }
    if (fs.statSync(filePath).isDirectory()) {
      recursivelyRemove(filePath);
    }
  });
};

recursivelyRemove(__dirname);
