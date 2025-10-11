const express = require('express');
const { movieValidation } = require('../utilities/validation');
const router = express.Router();
const moviesController = require('../controllers/movies');
const { isAuthenticated } = require('../utilities');

router.get('/', moviesController.getAll);

router.get('/:id', movieValidation.id, moviesController.getSingle);

router.post(
  '/',
  isAuthenticated,
  movieValidation.create,
  moviesController.createMovie,
);

router.put(
  '/:id',
  isAuthenticated,
  movieValidation.update,
  moviesController.updateMovie,
);

router.delete(
  '/:id',
  isAuthenticated,
  movieValidation.id,
  moviesController.deleteMovie,
);

module.exports = router;
