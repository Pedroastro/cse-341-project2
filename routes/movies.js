const express = require('express');
const { movieValidation } = require('../utilities/validation');
const router = express.Router();
const moviesController = require('../controllers/movies');

router.get('/', moviesController.getAll);

router.get('/:id', movieValidation.id, moviesController.getSingle);

router.post('/', movieValidation.create, moviesController.createMovie);

router.put('/:id', movieValidation.update, moviesController.updateMovie);

router.delete('/:id', movieValidation.id, moviesController.deleteMovie);

module.exports = router;
