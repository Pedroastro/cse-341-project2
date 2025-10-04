const express = require('express');
const { movieValidation } = require('../utilities/validation');
const router = express.Router();
const moviesController = require('../controllers/movies');
const { asyncHandler } = require('../utilities');

router.get('/', asyncHandler(moviesController.getAll));

router.get(
  '/:id',
  movieValidation.id,
  asyncHandler(moviesController.getSingle),
);

router.post(
  '/',
  movieValidation.create,
  asyncHandler(moviesController.createMovie),
);

router.put(
  '/:id',
  movieValidation.update,
  asyncHandler(moviesController.updateMovie),
);

router.delete(
  '/:id',
  movieValidation.id,
  asyncHandler(moviesController.deleteMovie),
);

module.exports = router;
