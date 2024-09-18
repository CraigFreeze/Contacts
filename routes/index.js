const router = require('express').Router();

// const indexController = require('../controllers/index.js')

router.get('/', (req, res) => { res.send("hello!")})
// router.use('/contacts', require('./contacts'))

module.exports = {
    router
}