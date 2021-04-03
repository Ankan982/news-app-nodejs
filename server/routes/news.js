const express = require('express');
const router = express.Router();
const controllers = require('../controllers/controllers');

// Routes
router.get('/', controllers.view);
router.get('/technology', controllers.technologyview);
router.get('/bitcoin', controllers.bitcoinview);
router.get('/economy', controllers.economyview);


module.exports = router;