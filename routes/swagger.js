const router = require('express').Router();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger.json');
const { asyncHandler } = require('../utilities');
router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', asyncHandler(swaggerUi.setup(swaggerDocument)));

module.exports = router;
