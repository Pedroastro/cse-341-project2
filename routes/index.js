const router = require('express').Router();
const passport = require('passport');
const utilities = require('../utilities');

router.use('/', require('./swagger'));

router.use('/movies', utilities.asyncHandler(require('./movies')));

router.use('/tv-shows', utilities.asyncHandler(require('./tv-shows')));

router.get('/login', utilities.asyncHandler(passport.authenticate('github')));

router.get(
  '/logout',
  utilities.asyncHandler(function (req, res, next) {
    req.logout(function (err) {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
  }),
);

router.use((err, req, res, next) => {
  utilities.logErrorToFile(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

module.exports = router;
