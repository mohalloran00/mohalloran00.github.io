const fs = require('fs');
const path = require('path');

// import the list of files and directories to NOT delete
const notDist = require('./not-dist.json').map(file =>
  path.resolve(__dirname, file)
);

const recursivelyRemove = function (folderPath) {
  // get all the files and subdirectories within a given directory
  const files = fs.readdirSync(folderPath);

  // for each file/subdir
  files.forEach(file => {
    const filePath = path.resolve(folderPath, file);

    // ignore if it's on the ignore list
    if (notDist.includes(filePath)) return;

    // if it's a file, delete it
    if (fs.statSync(filePath).isFile()) {
      fs.unlinkSync(filePath);
      console.log(`Successfully deleted ${filePath}.`);

      // if it's a directory, run this function recursively
    } else if (fs.statSync(filePath).isDirectory()) {
      recursivelyRemove(filePath);
    }
  });
};

// start the function at the current directory
recursivelyRemove(__dirname);
