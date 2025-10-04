const express = require('express');

const router = express.Router();

const tvShowsController = require('../controllers/tv-shows');

router.get('/', tvShowsController.getAll);

router.get('/:id', tvShowsController.getSingle);

router.post('/', tvShowsController.createTvShow);

router.put('/:id', tvShowsController.updateTvShow);

router.delete('/:id', tvShowsController.deleteTvShow);

module.exports = router;
