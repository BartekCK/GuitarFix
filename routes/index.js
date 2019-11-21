const express = require('express');
const router = express.Router();
const pagesController = require('../controllers/PagesController');
const formController = require('../controllers/FormController');

router.get('/', pagesController.home);
router.post('/send', formController.sendFrom);

module.exports = router;