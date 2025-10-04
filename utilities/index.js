const fs = require('fs');
const path = require('path');

function asyncHandler(fn) {
  return function (req, res, next) {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

function logErrorToFile(error) {
  const logPath = path.join(__dirname, '../error.log');
  const logEntry = `\n[${new Date().toISOString()}] ${error.stack || error}\n`;
  fs.appendFile(logPath, logEntry, (err) => {
    if (err) {
      console.error('Failed to write error log:', err);
    }
  });
}

module.exports = {
  asyncHandler,
  logErrorToFile,
};
