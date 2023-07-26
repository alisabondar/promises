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
var fsPromises = require('fs/promises');
var db = require('./promisification');
var read = require('./promiseConstructor');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  // TODO
  return read.pluckFirstLineFromFileAsync(readFilePath)
    .then((user) => db.getGitHubProfileAsync(user))
    .then((file) => {
      return fsPromises.writeFile(writeFilePath, JSON.stringify(file));
    })
    .catch((err) => console.error(err));
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
