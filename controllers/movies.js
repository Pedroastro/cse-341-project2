const mongodb = require('../data/database');
const ObjectId = require('mongodb').ObjectId;
const { validationResult } = require('express-validator');

const getAll = async (req, res) => {
  //#swagger.tags = ['Movies']
  const result = await mongodb.getDatabase().db().collection('movies').find();
  result.toArray().then((movies) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(movies);
  });
};

const getSingle = async (req, res) => {
  //#swagger.tags = ['Movies']
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const movieId = new ObjectId(req.params.id);
  const result = await mongodb
    .getDatabase()
    .db()
    .collection('movies')
    .find({ _id: movieId });
  result.toArray().then((movies) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(movies[0]);
  });
};

const createMovie = async (req, res) => {
  //#swagger.tags = ['Movies']
  //#swagger.description = 'Requires authentication. To access, log in via the /login endpoint.'
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const movie = {
    title: req.body.title,
    director: req.body.director,
    releaseYear: req.body.releaseYear,
    genre: req.body.genre,
    durationMinutes: req.body.durationMinutes,
    rating: req.body.rating,
    language: req.body.language,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('movies')
    .insertOne(movie);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while creating the movie.');
  }
};

const updateMovie = async (req, res) => {
  //#swagger.tags = ['Movies']
  //#swagger.description = 'Requires authentication. To access, log in via the /login endpoint.'
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const movieId = new ObjectId(req.params.id);
  const movie = {
    title: req.body.title,
    director: req.body.director,
    releaseYear: req.body.releaseYear,
    genre: req.body.genre,
    durationMinutes: req.body.durationMinutes,
    rating: req.body.rating,
    language: req.body.language,
  };
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('movies')
    .replaceOne({ _id: movieId }, movie);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while updating the movie.');
  }
};

const deleteMovie = async (req, res) => {
  //#swagger.tags = ['Movies']
  //#swagger.description = 'Requires authentication. To access, log in via the /login endpoint.'
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const movieId = new ObjectId(req.params.id);
  const response = await mongodb
    .getDatabase()
    .db()
    .collection('movies')
    .deleteOne({ _id: movieId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res
      .status(500)
      .json(response.error || 'Some error occurred while deleting the movie.');
  }
};

module.exports = {
  getAll,
  getSingle,
  createMovie,
  updateMovie,
  deleteMovie,
};
