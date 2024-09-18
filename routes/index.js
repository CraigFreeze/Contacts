const routes = require('express').Router();
const controller = require('../controllers/index.js');


routes.get('/', controller.base);

routes.use('/contacts', require('./contacts.js'))

module.exports = routes;