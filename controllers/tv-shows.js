const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const { validationResult } = require('express-validator');

const getAll = async (req, res) => {
  //#swagger.tags = ['TV Shows']
  const result = await mongodb.getDatabase().db().collection('tv_shows').find();
  result.toArray().then((tvShows) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(tvShows);
  });
};

const getSingle = async (req, res) => {
  //#swagger.tags = ['TV Shows']
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const tvShowId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('tv_shows')
    .find({ _id: tvShowId });
  result.toArray().then((tvShows) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(tvShows[0]);
  });
};

const createTvShow = async (req, res) => {
  //#swagger.tags = ['TV Shows']
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const tvShow = {
    title: req.body.title,
    creator: req.body.creator,
    startYear: req.body.startYear,
    endYear: req.body.endYear,
    seasons: req.body.seasons,
    episodes: req.body.episodes,
    genre: req.body.genre,
    language: req.body.language,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('tv_shows')
    .insertOne(tvShow);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while creating the TV show.',
      );
  }
};

const updateTvShow = async (req, res) => {
  //#swagger.tags = ['TV Shows']
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const tvShowId = new ObjectId(req.params.id);
  const tvShow = {
    title: req.body.title,
    creator: req.body.creator,
    startYear: req.body.startYear,
    endYear: req.body.endYear,
    seasons: req.body.seasons,
    episodes: req.body.episodes,
    genre: req.body.genre,
    language: req.body.language,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('tv_shows')
    .replaceOne({ _id: tvShowId }, tvShow);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while updating the TV show.',
      );
  }
};

const deleteTvShow = async (req, res) => {
  //#swagger.tags = ['TV Shows']
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const tvShowId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('tv_shows')
    .deleteOne({ _id: tvShowId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(
        response.error || 'Some error occurred while deleting the TV show.',
      );
  }
};

module.exports = {
  getAll,
  getSingle,
  createTvShow,
  updateTvShow,
  deleteTvShow,
};
