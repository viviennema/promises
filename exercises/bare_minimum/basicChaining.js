/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var { getGitHubProfileAsync } = require('./promisification.js');

Promise.promisifyAll(fs);

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return fs.readFileAsync(readFilePath, 'utf8')
    .then((fileData) => {
      return username = fileData.toString().split('\n')[0];
    })
    .then((username) => getGitHubProfileAsync(username))
    .then((file) => fs.writeFileAsync(writeFilePath, JSON.stringify(file)));
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
