const express = require('express');
const routes = express.Router();

const contactsController = require('../controllers/contactsController.js')

routes.get('/', contactsController.getAll)

routes.get('/:id', contactsController.getOne)


module.exports = routes;