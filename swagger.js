const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: "Users Api",
        description: 'Users Api'
    },
    host: 'contacts-cv19.onrender.com',
    schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);