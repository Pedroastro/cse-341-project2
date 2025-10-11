const express = require('express');
const { tvShowValidation } = require('../utilities/validation');
const router = express.Router();
const tvShowsController = require('../controllers/tv-shows');
const { isAuthenticated } = require('../utilities');

router.get('/', tvShowsController.getAll);

router.get('/:id', tvShowValidation.id, tvShowsController.getSingle);

router.post(
  '/',
  isAuthenticated,
  tvShowValidation.create,
  tvShowsController.createTvShow,
);

router.put(
  '/:id',
  isAuthenticated,
  tvShowValidation.update,
  tvShowsController.updateTvShow,
);

router.delete(
  '/:id',
  isAuthenticated,
  tvShowValidation.id,
  tvShowsController.deleteTvShow,
);

module.exports = router;
