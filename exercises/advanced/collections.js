/**
 * Using Promise.all, write a function, combineFirstLineOfManyFiles, that:
 *    1. Reads each file at the path in the `filePaths` array
 *    2. Plucks the first line of each file
 *    3. Joins each first line into a new file
 *      - The lines should be in the same order with respect to the input array
 *      - i.e. the second line in the new file should be the first line of `filePaths[1]`
 *    4. Writes the new file to the file located at `writePath`
 */
var Promise = require('bluebird');
var fs = require('fs');
Promise.promisifyAll(fs);

var combineFirstLineOfManyFiles = function(filePaths, writePath) {
  // TODO
  var promises = filePaths.map(filePath => {
    return fs.readFileAsync(filePath, 'utf8')
      .then(content => content.toString().split('\n')[0]);
  });
  return Promise.all(promises)
    .then(promises => {
      fs.writeFileAsync(writePath, promises.join('\n'));
    });
};

// Export these functions so we can unit test them
module.exports = {
  combineFirstLineOfManyFiles: combineFirstLineOfManyFiles
};