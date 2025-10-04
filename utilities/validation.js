const { body, param } = require('express-validator');

const movieValidation = {
  create: [
    body('title').isString().notEmpty().withMessage('Enter a valid title'),
    body('director')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid director'),
    body('releaseYear').isInt({ min: 1888 }).withMessage('Enter a valid year'),
    body('genre').isString().notEmpty().withMessage('Enter a valid genre'),
    body('durationMinutes')
      .isInt({ min: 1 })
      .withMessage('Enter a valid duration in minutes'),
    body('rating')
      .isFloat({ min: 0, max: 10 })
      .withMessage('Enter a valid rating between 0 and 10'),
    body('language')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid language'),
  ],
  update: [
    param('id').isMongoId().withMessage('Invalid movie ID'),
    body('title').isString().notEmpty().withMessage('Enter a valid title'),
    body('director')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid director'),
    body('releaseYear').isInt({ min: 1888 }).withMessage('Enter a valid year'),
    body('genre').isString().notEmpty().withMessage('Enter a valid genre'),
    body('durationMinutes')
      .isInt({ min: 1 })
      .withMessage('Enter a valid duration in minutes'),
    body('rating')
      .isFloat({ min: 0, max: 10 })
      .withMessage('Enter a valid rating between 0 and 10'),
    body('language')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid language'),
  ],
  id: [param('id').isMongoId().withMessage('Invalid movie ID')],
};

const tvShowValidation = {
  create: [
    body('title').isString().notEmpty().withMessage('Enter a valid title'),
    body('creator').isString().notEmpty().withMessage('Enter a valid creator'),
    body('startYear')
      .isInt({ min: 1900 })
      .withMessage('Enter a valid start year'),
    body('endYear').optional().isInt({ min: 1900 }),
    body('seasons')
      .isInt({ min: 1 })
      .withMessage('Enter a valid number of seasons'),
    body('episodes')
      .isInt({ min: 1 })
      .withMessage('Enter a valid number of episodes'),
    body('genre').isString().notEmpty().withMessage('Enter a valid genre'),
    body('language')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid language'),
  ],
  update: [
    param('id').isMongoId().withMessage('Invalid TV show ID'),
    body('title').isString().notEmpty().withMessage('Enter a valid title'),
    body('creator').isString().notEmpty().withMessage('Enter a valid creator'),
    body('startYear')
      .isInt({ min: 1900 })
      .withMessage('Enter a valid start year'),
    body('endYear').optional().isInt({ min: 1900 }),
    body('seasons')
      .isInt({ min: 1 })
      .withMessage('Enter a valid number of seasons'),
    body('episodes')
      .isInt({ min: 1 })
      .withMessage('Enter a valid number of episodes'),
    body('genre').isString().notEmpty().withMessage('Enter a valid genre'),
    body('language')
      .isString()
      .notEmpty()
      .withMessage('Enter a valid language'),
  ],
  id: [param('id').isMongoId().withMessage('Invalid TV show ID')],
};

module.exports = {
  movieValidation,
  tvShowValidation,
};
