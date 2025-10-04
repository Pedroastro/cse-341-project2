const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Movies and TV Shows Api',
    description: 'Movies and TV Shows Api',
  },
  host: 'cse-341-project2-9hy6.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
