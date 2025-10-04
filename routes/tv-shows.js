const express = require('express');
const { tvShowValidation } = require('../utilities/validation');
const router = express.Router();
const tvShowsController = require('../controllers/tv-shows');
const { asyncHandler } = require('../utilities');

router.get('/', asyncHandler(tvShowsController.getAll));

router.get(
  '/:id',
  tvShowValidation.id,
  asyncHandler(tvShowsController.getSingle),
);

router.post(
  '/',
  tvShowValidation.create,
  asyncHandler(tvShowsController.createTvShow),
);

router.put(
  '/:id',
  tvShowValidation.update,
  asyncHandler(tvShowsController.updateTvShow),
);

router.delete(
  '/:id',
  tvShowValidation.id,
  asyncHandler(tvShowsController.deleteTvShow),
);

module.exports = router;
