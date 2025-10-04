const router = require('express').Router();
const utilities = require('../utilities');

router.use('/', require('./swagger'));

router.get('/', utilities.asyncHandler((req, res) => {
  //#swagger.tags=['Hello World']
  res.send('Hello World');
}));

router.use('/movies', utilities.asyncHandler(require('./movies')));

router.use('/tv-shows', utilities.asyncHandler(require('./tv-shows')));

router.use((err, req, res, next) => {
  utilities.logErrorToFile(err);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
    },
  });
});

module.exports = router;
