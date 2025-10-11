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

const isAuthenticated = (req, res, next) => {
  if (req.session.user === undefined) {
    return res.status(401).json('You do not have access.');
  }
  next();
};

module.exports = {
  asyncHandler,
  logErrorToFile,
  isAuthenticated,
};
