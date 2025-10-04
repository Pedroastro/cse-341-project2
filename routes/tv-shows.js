const express = require('express');
const { tvShowValidation } = require('../utilities/validation');
const router = express.Router();
const tvShowsController = require('../controllers/tv-shows');

router.get('/', tvShowsController.getAll);

router.get('/:id', tvShowValidation.id, tvShowsController.getSingle);

router.post('/', tvShowValidation.create, tvShowsController.createTvShow);

router.put('/:id', tvShowValidation.update, tvShowsController.updateTvShow);

router.delete('/:id', tvShowValidation.id, tvShowsController.deleteTvShow);

module.exports = router;
