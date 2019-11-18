const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/PagesController');

router.get('/',pagesController.home);


module.exports = router;